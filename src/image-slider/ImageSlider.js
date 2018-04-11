import React from 'react';
import { Carousel } from 'react-bootstrap';
import './imageslider.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const ImageSlider = (props) => {
    return(
        <Carousel className="main-slider">
            <Carousel.Item>
            <div className="center-cropped" style={{"background-image": "url('http://content.invisioncic.com/r262345/monthly_2017_05/HrGJJU9.gif.9e2dd3de9c62926324b1f0f256c01570.gif')"}}></div>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider;