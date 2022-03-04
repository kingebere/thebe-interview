import React from "react";
import "./input.css";
const Input = ({handleChange, query}) => {
  return (
    <>
      <div className="input-row">
        <div className="input-column">
          <div>
            <h1 className="input-text">
              React Image Search Using Unsplash API.
            </h1>
          </div>
          <div className="input-form">
            <input
              placeholder="Search for images"
              type="text"
              value={query}
              onChange={handleChange}
              aria-label="user-name"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Input;
