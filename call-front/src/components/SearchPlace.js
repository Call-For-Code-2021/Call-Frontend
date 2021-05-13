// SearchPlace.js

import React, { useState } from "react";
import MapContainer from "./MapContainer";
import "./SearchPlace.css";

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
        <form className="inputForm" onSubmit={handleSubmit}>
          <input
              placeholder="Search Place..."
              onChange={onChange}
              value={inputText}
          />
          <button type="submit">검색</button>
        </form>
      </div>
      <MapContainer searchPlace={place} />
    </>
  );
};

export default SearchPlace;