import React from "react";
import slides from "./slides";

const SlideShow = () => {
  return (
    <div>
      {slides.map((slide, index) => (
        <div key={index}>
          <h1>{slide.headerTitle}</h1>
          <h2>{slide.title}</h2>
          <img src={slide.imageUrl} alt={slide.title} />
          <p>{slide.description}</p>
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
