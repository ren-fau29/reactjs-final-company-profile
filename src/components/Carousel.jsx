import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hyundai from "../assets/products/1.png";
import Subaru from "../assets/products/2.png";
import Toyota from "../assets/products/3.png";
import Ford from "../assets/products/4.png";
import Kia from "../assets/products/5.png";
import Jeep from "../assets/products/6.png";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="pt-20 xl:w-[95%] w-[85%] mx-auto">
        <h2 className="xl:text-3xl text-2xl xl:ml-20 ml-5 mb-10">
          {" "}
          BRAND NEW CARS{" "}
        </h2>
        <Slider {...settings}>
          <div className="p-4">
            <img src={Hyundai} alt="" />
            <h3 className="font-semibold text-lg pt-4">Hyundai IONIQ 5</h3>
            <h4>Based on Hyundai</h4>
          </div>
          <div className="p-4">
            <img src={Subaru} alt="" />
            <h3 className="font-semibold text-lg pt-4">Subaru Outback</h3>
            <h4>Based on Subaru</h4>
          </div>
          <div className="p-4">
            <img src={Toyota} alt="" />
            <h3 className="font-semibold text-lg pt-4">Toyota RAV4 Hybrid</h3>
            <h4>Based on Toyota</h4>
          </div>
          <div className="p-4">
            <img src={Ford} alt="" />
            <h3 className="font-semibold text-lg pt-4">Ford Bronco</h3>
            <h4>Based on Ford</h4>
          </div>
          <div className="p-4">
            <img src={Kia} alt="" />
            <h3 className="font-semibold text-lg pt-4">Kia Sorento</h3>
            <h4>Based on Kia</h4>
          </div>
          <div className="p-4">
            <img src={Jeep} alt="" />
            <h3 className="font-semibold text-lg pt-4">Jeep Grand Cherokee</h3>
            <h4>Based on Jeep</h4>
          </div>
        </Slider>
      </div>
    );
  }
}
