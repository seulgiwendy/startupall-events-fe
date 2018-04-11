import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import './mainpage.css';
import ImageSlider from '../image-slider/ImageSlider';
import EventList from '../item-lists/EventList';

class MainPage extends Component {
    render() {
        return(
            <div className="main-body">
                <Jumbotron className="main-jumbo">
                    <ImageSlider/>
                </Jumbotron>
                <div className="main-caption">
                    <h4>진행중인 신청들</h4>
                </div>
                <div className="main-events">
                    <EventList/>
                </div>
            </div>
        )
        
    }
}

export default MainPage;