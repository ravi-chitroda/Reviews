import React, { useState } from "react";
import people from "./Data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { GiShoppingCart } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(1); //whenever "index state changed below detail in people will be change as we pass "index" to the people
  const { name, job, image, text } = people[index];

  //for if we click on prev or next button if first and last person respectively than gives an error as no person available before previous(-1) and after last person
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  //for next person quotes
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  //   for previous person quotes
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  //functionality of "surprise button" to get the random person review
  const randomPerson = () => {
    // console.log(Math.random());
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log("random Number", randomNumber);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

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
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Surprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
