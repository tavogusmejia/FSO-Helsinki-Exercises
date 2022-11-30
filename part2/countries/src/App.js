import { useState, useEffect } from "react";
import axios from "axios";

const Filter = ({ newFilter, handleChange }) => (
  <div>
    Find Countries: <input value={newFilter} onChange={handleChange} />
  </div>
);

const CountriesList = ({ newFilter, countries }) => {
  const filteredCountries = countries.filter((name) =>
    name.country_name.toLowerCase().includes(newFilter.toLowerCase())
  );

  const countriesToShow = newFilter === "" ? countries : filteredCountries;

  if (filteredCountries.length === 0) {
    return (
      <div>
        <h3>There is no matches, specify another filter</h3>
      </div>
    );
  }

  if (filteredCountries.length === 1) {
    const langsTest = Object.values(countriesToShow[0].languages).map(
      (element, index) => ({ id: index, language: element })
    );
    console.log(langsTest);

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
            {langsTest.map((langs) => (
              <li>{langs.language}</li>
            ))}
          </ul>
        </div>
        <div>
          <img src={countriesToShow[0].flag} alt="Flag" width="200"></img>
        </div>
      </div>
    );
  }

  if (filteredCountries.length > 10) {
    return (
      <div>
        <h3>Too many matches, specify another filter</h3>
      </div>
    );
  }

  if (filteredCountries.length <= 10) {
    return (
      <div>
        <h3>Countries Found:</h3>
        {countriesToShow.map((country) => (
          <div key={country.id}>{country.country_name}</div>
        ))}
      </div>
    );
  }
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  //Effect Hook
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
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
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h1>COUNTRIES INFO</h1>
      <Filter handleChange={handleFilter} />
      <CountriesList countries={countries} newFilter={newFilter} />
    </div>
  );
};

export default App;
