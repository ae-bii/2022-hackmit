import "../style.css";
import Carousel from "nuka-carousel";
import React from "react";

const ModelSlider = () => {
  return (
    <Carousel wrapAround="true" cellAlign='center'>
      <img src="https://via.placeholder.com/600x200" />
      <img src="https://via.placeholder.com/600x200" />
      <img src="https://via.placeholder.com/600x200" />
      <img src="https://via.placeholder.com/600x200" />
      <img src="https://via.placeholder.com/600x200" />
    </Carousel>
  );
};
export default ModelSlider;
