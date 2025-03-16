import React from "react";
import "./Category.css";
import Input from "../../shared/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="All"
            name="test3"
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test3"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test3"
        />
      </div>
    </div>
  );
};

export default Category;
