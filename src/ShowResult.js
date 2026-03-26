import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

export default function ShowResult(props) {
  let searchCity = props.city;
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  let [error, setError] = useState(null);

  function showValues(response) {
    setError(null); // reset error
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    console.log(response);
  }

  useEffect(() => {
    if (!searchCity) return;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios
      .get(url)
      .then(showValues)
      .catch(() => {
        setError("Your city name is not valid. Please use an existing city!");
      });
  }, [searchCity]);

  if (!searchCity) {
    return <p></p>;
  } else if (error) {
    return <p className="error">{error}</p>;
  } else {
    return (
      <div className="list">
        <p>
          The weather in <strong>{searchCity}</strong> is:
        </p>
        <ul>
          <li>
            {" "}
            <strong> Temperature </strong>: {temperature}°C{" "}
          </li>
          <li>
            {" "}
            <strong> Description </strong>: {description}{" "}
          </li>
          <li>
            {" "}
            <strong> Humidity </strong>: {humidity}%{" "}
          </li>
          <li>
            {" "}
            <strong> Wind Speed </strong>: {wind}km/h{" "}
          </li>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
          />
        </ul>
      </div>
    );
  }
}
