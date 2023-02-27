import React, { useRef } from "react";
import "../../../styles/style Home/home.css";
import { Card } from "./my-card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CardHome = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    const carousel = carouselRef.current;
    const width = carousel.clientWidth;
    carousel.scrollLeft -= width;
  };

  const handleNext = () => {
    const carousel = carouselRef.current;
    const width = carousel.clientWidth;
    carousel.scrollLeft += width;
  };

  return (
    <div className="product-carousel-home">
      <button className="pre-btn" onClick={handlePrev}>
        <p className="slider-home">
          <FaChevronLeft />
        </p>
      </button>
      <button className="next-btn" onClick={handleNext}>
        <p className="slider-home">
          <FaChevronRight />
        </p>
      </button>

      <div className="container carousel-home" ref={carouselRef}>
        <Card cardno="1" />
        <Card cardno="2" />
        <Card cardno="3" />
        <Card cardno="4" />
        <Card cardno="5" />
        <Card cardno="6" />
        <Card cardno="7" />
        <Card cardno="8" />
      </div>
    </div>
  );
};
