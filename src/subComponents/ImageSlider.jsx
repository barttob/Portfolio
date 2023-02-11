import React from "react";
import { useState } from "react";

import "../styles/Slider.css";

const ImageSlider = ({ title, slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="slider">
      <div className="slider__title">{title}</div>
      <div className="slider__container">
        <div onClick={goToPrevious} className="slider__container--arrow">
          ❰
        </div>
        <a href={slides[currentIndex].link} target="_blank">
          <img src={slides[currentIndex].imgSrc} alt="" />
        </a>
        <div onClick={goToNext} className="slider__container--arrow">
          ❱
        </div>
      </div>
      <div className="slider__dots">
        {slides.map((slide, slideIndex) => (
          <div
            className="slider__dots--style"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
