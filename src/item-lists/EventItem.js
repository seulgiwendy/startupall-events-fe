import React from 'react';
import { Panel } from 'react-bootstrap';
import './events.css';

const EventItem = (props) => {
    return(
        <Panel className="events-item">
            <div className="events-item-thumb">
                <div className="events-item-img" style={{"background-image": "url('https://i.mydramalist.com/W1mERc.jpg')"}}></div>
            </div>
            <div className="events-item-textbox container-fluid">
                <div className="events-item-title col-md-9">
                    <span>링크와 함께하는 스프링</span>
                    <span>2018.04.10</span>
                </div>
                <div className="events-item-date col-md-3">
                    <p className="date-text">D - 5</p>
                </div>
            </div>
        </Panel>
    )
}

export default EventItem;