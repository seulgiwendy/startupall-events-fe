import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './mainpage.css';
import ImageSlider from '../image-slider/ImageSlider';

class MainPage extends Component {
    render() {
        return(
            <div className="main-body">
                <Jumbotron className="main-jumbo">
                    <ImageSlider/>
                </Jumbotron>
            </div>
        )
        
    }
}

export default MainPage;