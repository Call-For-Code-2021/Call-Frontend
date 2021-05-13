// SearchPlace.js

import React, { useState } from "react";
import MapContainer from "./MapContainer";
import "./SearchPlace.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchPlace = () => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <div className="inputForm-con">
        <form className="inputForm d-flex" onSubmit={handleSubmit}>
          <input
              className="form-control me-2"
              type="search"
              placeholder="Search Place..."
              aria-label="Search"
              onChange={onChange}
              value={inputText}
          />
          <button className="btn btn-outline-success" type="submit">검색</button>
        </form>
      </div>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;