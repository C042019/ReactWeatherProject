import React from "react";
import "./Main.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Main() {
  let currentTemp = 48
  let windSpeed = 4
  let humidity = 50
  return (
    <div className="stats">
      <ul>
        <li className="temp">
          {currentTemp}<span className="current-temp"></span>
          <span className="units">
            <a href="#" className="celsius active link">
              °C{" "}
            </a>
            |
            <a href="#" className="fahrenheit link">
              {" "}
              °F
            </a>
          </span>
        </li>
        <li className="wind">
          Wind Speed:{windSpeed}<span> mph</span>
        </li>
        <li className="humidity">
          Humidity: {humidity}<span> %</span>
        </li>
      </ul>
    </div>
  );
}
