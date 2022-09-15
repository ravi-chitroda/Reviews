import React, { useState } from "react";
import people from "./Data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { GiShoppingCart } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1); //whenever "index state changed below detail in people will be change as we pass "index" to the people
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div>
        <button className="prev-btn">
          <FaChevronLeft />
        </button>
        <button className="next-btn">
          <FaChevronRight />
        </button>
        <button className="random-btn">Surprise Me</button>
      </div>
    </article>
  );
};

export default Review;
