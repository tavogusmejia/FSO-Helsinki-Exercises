import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ newFilter, handleChange }) => (
  <div>
    Find Countries:{" "}
    <input id="searchInput" value={newFilter} onChange={handleChange} />
  </div>
);

const FilterEqual0 = () => {
  return (
    <div>
      <h3>There is no matches, specify another filter</h3>
    </div>
  );
};

const FilterMoreThan10 = () => {
  return (
    <div>
      <h3>Too many matches, specify another filter</h3>
    </div>
  );
};

const FilterEqual1 = ({ countriesToShow }) => {
  console.log(countriesToShow);
  const langs = Object.values(countriesToShow[0].languages).map(
    (element, index) => ({ id: index, language: element })
  );

  return (
    <div>
      <h3>
        Match Found<br></br>____________
      </h3>
      <div>
        <h2 key={countriesToShow[0].id}>{countriesToShow[0].country_name}</h2>
        <p>
          Capital: {countriesToShow[0].capital}
          <br></br>
          Area: {countriesToShow[0].area} km<sup>2</sup>
        </p>
      </div>
      <div>
        <h3>Languages</h3>
        <ul>
          {langs.map((langs) => (
            <li key={langs.language}>{langs.language}</li>
          ))}
        </ul>
      </div>
      <div>
        <img src={countriesToShow[0].flag} alt="Flag" width="200"></img>
      </div>
    </div>
  );
};

const FilterLessThan10 = ({ countriesToShow, handleClick }) => {
  return (
    <div>
      <h3>Countries Found:</h3>
      {countriesToShow.map((country) => (
        <div key={country.id}>
          {country.country_name}&nbsp;
          <button
            id={country.id}
            cid={country.id}
            type="button"
            onClick={handleClick}
          >
            Show {country.id}
          </button>
          <br></br>
        </div>
      ))}
    </div>
  );
};

const CountriesList = ({ newFilter, countries, handleClick }) => {
  const filteredCountries = countries.filter((countryFilter) => {
    return (
      countryFilter.country_name
        .toLowerCase()
        .includes(newFilter.toLowerCase()) ||
      countryFilter.id.toLowerCase().includes(newFilter.toLowerCase())
    );
  });

  let countriesToShow = newFilter === "" ? countries : filteredCountries;

  if (filteredCountries.length === 0) {
    return <FilterEqual0 />;
  }

  if (filteredCountries.length === 1) {
    return <FilterEqual1 countriesToShow={countriesToShow} />;
  }

  if (filteredCountries.length > 10) {
    return <FilterMoreThan10 />;
  }

  if (filteredCountries.length <= 10) {
    // console.log(filteredCountries);

    return (
      <FilterLessThan10
        countriesToShow={countriesToShow}
        handleClick={handleClick}
      />
    );
  }
};

const App = ({ countriesToShow }) => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  //Effect Hook
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      // console.log("promise fulfilled");
      setCountries(response.data);

      setCountries(
        response.data.map((countriesSkimmed) => ({
          id: countriesSkimmed.cca3,
          country_name: countriesSkimmed.name.common,
          capital: countriesSkimmed.capital,
          area: countriesSkimmed.area,
          languages: countriesSkimmed.languages,
          flag: countriesSkimmed.flags.svg,
        }))
      );
    });
  }, []);

  const handleFilter = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  const clickHandler = (event) => {
    let countryID = event.currentTarget.getAttribute("cid");
    document.getElementById("searchInput").value = countryID;
    setNewFilter(countryID);
  };

  return (
    <div>
      <h1>COUNTRIES INFO</h1>
      <Filter handleChange={handleFilter} />
      <CountriesList
        handleClick={clickHandler}
        countries={countries}
        newFilter={newFilter}
      />
    </div>
  );
};

export default App;
