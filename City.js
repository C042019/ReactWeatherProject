import React from "react";
import "./City.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function City() {
  let description = "Windy"
  let city = "Lewisville"
  let time = "21:00"
  return (
    <div>
      <ul className="city">
        <li>{city}</li>
        <li>{time}</li>
        <li>{description}</li>
      </ul>
    </div>
  );
}
