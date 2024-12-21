import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="carousel">
      <article
        className="carousel-inner"
        style={{ transform: `translate(-${currentIndex * 100}%)` }}
      >
        {images.map((item, index) => {
          return <img key={index} src={`/Img/${item}`} />;
        })}
      </article>
      <IoIosArrowBack onClick={prevSlide} className="btn-arrow left" />
      <IoIosArrowForward onClick={nextSlide} className="btn-arrow right" />
    </section>
  );
};
