import "../style.css";
import Carousel from "nuka-carousel";
import React from "react";

const CommunitySlider = () => {
  return (
    <Carousel autoplay="true" autoplayInterval="3000" renderCenterLeftControls="null" renderCenterRightControls="null" wrapAround="true" cellAlign='center'>
      <img alt="" src="https://via.placeholder.com/1920x483" />
      <img alt="" src="https://via.placeholder.com/1920x483" />
      <img alt="" src="https://via.placeholder.com/1920x483" />
      <img alt="" src="https://via.placeholder.com/1920x483" />
      <img alt="" src="https://via.placeholder.com/1920x483" />
      <img alt="" src="https://via.placeholder.com/1920x483" />
    </Carousel>
  );
};
export default CommunitySlider;
