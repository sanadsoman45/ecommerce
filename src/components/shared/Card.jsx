import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, newPrice, prevPrice }) {
  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />

      <div className="card-details">
        {/* Product Title */}
        <h3 className="card-title">{title}</h3>

        {/* Star Rating */}
        <section className="card-reviews">
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <AiFillStar className="rating-star" />
          <span className="total-reviews">{reviews}</span>
        </section>

        {/* Price & Bag Icon */}
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
          </div>

          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
