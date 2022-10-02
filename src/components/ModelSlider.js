import "../style.css";
import Carousel from "nuka-carousel";
import React from "react";

const ModelSlider = () => {
  return (
    <Carousel renderCenterLeftControls="null" renderCenterRightControls="null" wrapAround="true" cellAlign='center'>
      <img alt="" src="https://via.placeholder.com/600x200" />
      <img alt="" src="https://via.placeholder.com/600x200" />
      <img alt="" src="https://via.placeholder.com/600x200" />
      <img alt="" src="https://via.placeholder.com/600x200" />
      <img alt="" src="https://via.placeholder.com/600x200" />
    </Carousel>
  );
};
export default ModelSlider;
