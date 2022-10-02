import "../style.css";
import Carousel from "nuka-carousel";
import React from "react";
import Hack1 from "./images/hackim1.png"
import Hack2 from "./images/hackim2.png"
import Hack3 from "./images/hackim3.png"
import Hack5 from "./images/hackim5.png"

const CommunitySlider = () => {
  return (
    <Carousel autoplay="true" autoplayInterval={3000} renderCenterLeftControls="null" renderCenterRightControls="null" wrapAround="true" cellAlign='center'>
      <img alt="" src={Hack1} />
      <img alt="" src={Hack2} />
      <img alt="" src={Hack3} />
      <img alt="" src={Hack5} />
    </Carousel>
  );
};
export default CommunitySlider;
