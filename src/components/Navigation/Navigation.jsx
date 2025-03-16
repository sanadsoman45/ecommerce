import React from "react";
import "./Navigation.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";

const Navigation = ({ handleInputChange }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          onChange={handleInputChange}
          className="search-input"
          type="text"
          placeholder="Enter your search"
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
