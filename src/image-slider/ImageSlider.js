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
            <div className="center-cropped" style={{"background-image": "url('https://i.imgur.com/QPuudPa.jpg')"}}></div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="center-cropped" style={{"background-image": "url('https://i.imgur.com/QPuudPa.jpg')"}}></div>
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageSlider;