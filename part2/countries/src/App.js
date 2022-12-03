import { useState, useEffect } from "react";
import axios from "axios"; //imported to get data from the API

//Component to handle the filter input
const Filter = ({ newFilter, handleChange }) => (
  <div>
    Find Countries:{" "}
    <input
      id="searchInput"
      placeholder="Enter Location"
      value={newFilter}
      onChange={handleChange}
    />
  </div>
);

//Message to show when the filtered countries are equal to 0
const FilterEqual0 = () => {
  return (
    <div>
      <h3>There is no matches, specify another filter</h3>
    </div>
  );
};

//Message to show when the filtered countries are more than 10
const FilterMoreThan10 = () => {
  return (
    <div>
      <h3>Too many matches, specify another filter</h3>
    </div>
  );
};

//Component to show country when there is a match in the search input
const FilterEqual1 = ({ countriesToShow }) => {
  const langs = Object.values(countriesToShow[0].languages).map(
    (element, index) => ({ id: index, language: element })
  );

  return (
    <div>
      <h3>
        Match Found<br></br>____________
      </h3>
      <div>
        <h1 key={countriesToShow[0].id}>{countriesToShow[0].country_name}</h1>
        <p>
          Capital: {countriesToShow[0].capital}
          <br></br>
          Area: {countriesToShow[0].area} km<sup>2</sup>
          <br></br>
          <br></br>
          ISO 3166-1 (alpha-3): {countriesToShow[0].id}
          {/* <br></br>
          LatLong: {countriesToShow[0].latlng} */}
          {/* Variables commented for future use */}
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
      <div>
        <LocationWeather capital={countriesToShow[0].capital} />
      </div>
    </div>
  );
};

//Component to show information when the filtered countries are less than 10
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

//Component to get and show the weather information
const LocationWeather = ({ capital }) => {
  const [location, setLocation] = useState({});
  const gamut_api_key = process.env.REACT_APP_GAMUT_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${gamut_api_key}`;

  //To get the weather information from the API
  useEffect(() => {
    axios.get(url).then((response) => {
      console.log("promise fulfilled");
      setLocation(response.data);
    });
  }, [url]);//url use as React Hook useEffect dependency
  
  //This is just to make each word capitalized-----
  let capitalWeather = location.weather ? location.weather[0].description : null
  capitalWeather = capitalWeather ? capitalWeather.split(" ") : null;
  capitalWeather = capitalWeather ? capitalWeather.map((word) => { 
    return word[0].toUpperCase() + word.substring(1); 
}).join(" ") : null;
//-------------------------------------------------

//This is just to get the weather icon
//Icon variable must be initialized first before using it on the URL
let weatherIcon = location.weather ? location.weather[0].icon : null
let weatherIconURL = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`

//Here is the structure of the weather section shown in the app
  return (
    <div>
      <h2>Weather in {location.name}</h2>
      {location.main ? (
        <p>Temperature {location.main.temp.toFixed(1)} °C</p>
      ) : null}
      <img src={weatherIconURL} alt="1" />
        <br></br> {capitalWeather}
      {location.wind ? (  
        <p>Wind Speed {location.wind.speed.toFixed(1)} m/s</p>
      ) : null}
    </div>
  );
};

//This Component controls filtering and when and how the information is shown
const CountriesList = ({ newFilter, countries, handleClick, location }) => {
  //Filtering via match in country name or with country code
  const filteredCountries = countries.filter((countryFilter) => {
    return (
      countryFilter.country_name
        .toLowerCase()
        .includes(newFilter.toLowerCase()) ||
      countryFilter.id.toLowerCase().includes(newFilter.toLowerCase())
    );
  });

  //If the input is empty the filteredCountries is equial to Countries, thus the lenght is > 10
  let countriesToShow = newFilter === "" ? countries : filteredCountries;

  // Next conditionals explain themselves
  if (filteredCountries.length === 0) {
    return <FilterEqual0 />;
  }

  if (filteredCountries.length === 1) {
    return (
      <FilterEqual1 countriesToShow={countriesToShow} location={location} />
    );
  }

  if (filteredCountries.length > 10) {
    return <FilterMoreThan10 />;
  }

  if (filteredCountries.length <= 10) {
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

  //Effect Hook - gets the information for the countries
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);

      //Mapping countries for easier handling
      setCountries(
        response.data.map((countriesSkimmed) => ({
          id: countriesSkimmed.cca3,
          country_name: countriesSkimmed.name.common,
          capital: countriesSkimmed.capital,
          area: countriesSkimmed.area,
          languages: countriesSkimmed.languages,
          flag: countriesSkimmed.flags.svg,
          latlng: countriesSkimmed.latlng,
        }))
      );
    });
  }, []);

  //Handles input changes on the input box
  const handleFilter = (event) => {
    setNewFilter(event.target.value);
  };

  //Handles click on show buttons when multiple countries are shown
  const clickHandler = (event) => {
    let countryID = event.currentTarget.getAttribute("cid");
    document.getElementById("searchInput").value = countryID;
    setNewFilter(countryID);
  };

  //Main structure of the app
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
