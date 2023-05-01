import React, { Component } from "react";
import Slider from "react-slick";
import "./Slick.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        const pictures = ['jpg.jpg', 'jpg.jpg', 'jpg.jpg'];

        return (
            <div>
                <Slider {...settings}>
                    <div>
                    <img
                        src={require('../img/img1.jpg')}
                        alt=""
                        width={300}
                        className="pic"
                        />
                    </div>
                    <div>
                    <img
                        src={require('../img/img2.jpg')}
                        alt=""
                        width={300}
                        className="pic"
                        />
                    </div>
                    <div>
                    <img
                        src={require('../img/img3.jpg')}
                        alt=""
                        width={300}
                        className="pic"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}
