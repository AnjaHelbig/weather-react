import React, { useState } from "react";
import "./styles.css";

import ShowResult from "./ShowResult";

export default function InputForm() {
  let [city, setCity] = useState(null);
  let [input, setInput] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setInput(city);
  }

  function updateCity(event) {
    setCity(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>

      <ShowResult city={input} />
    </>
  );
}
