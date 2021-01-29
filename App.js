import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Form from "./Form";
import City from "./City";
import "./styles.css";

export default function App() {
  let day ="Tuesday"
  return (
    <div className="App">
      <div className="container">
        <img
          src="https://thumbs.gfycat.com/CanineSameEwe-small.gif"
          alt="vaporwave"
        />
        <div className="main-weather">
          <h1 className="header">Radical {day}</h1>
        </div>
        <Main />
        <City />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
