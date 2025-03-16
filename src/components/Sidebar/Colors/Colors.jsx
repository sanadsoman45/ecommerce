import React from "react";
import "./Colors.css";
import Input from "../../shared/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="All" name="test1" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="blue"
      />
      <Input
        color="red"
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
      />
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value="white"
          name="test1"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Colors;
