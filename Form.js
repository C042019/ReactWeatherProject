import React from "react";
import "./Form.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function Form() {
  return (
    <div className="container">
      <div class="row">
        <form className="search-form">
          <input
            type="text"
            className="search"
            placeholder="Type a city..."
          ></input>
          <button className="button">
            <img
              id="gvo"
              src="https://i.pinimg.com/originals/9f/e0/41/9fe041c5649f38c2bcc386eaeb111abe.jpg"
            />
          </button>
        </form>
      </div>
    </div>
  );
}
