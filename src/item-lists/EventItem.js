import React from 'react';
import { Panel, Label } from 'react-bootstrap';
import './events.css';
import EventTags from './EventTags';

const EventItem = (props) => {
    return(
        <Panel className="events-item">
            <div className="events-item-thumb">
                <div className="events-item-img container-fluid" style={{"background-image": "url('https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/29790279_763953100482167_7328894323359729262_n.png?_nc_cat=0&_nc_eui2=v1%3AAeFicSGGSNNsMLQpjVVTndjgvadQezZX9A-AFK76UFgKW2atcamp1PhI1zx8a-FTg41oo_DO18mxwuFzHSLek5GUF3BI_mJar7AHWx8llmtnhg&oh=4027a13c10ffa01719e215069640559e&oe=5B5FA1AD')"}}>
                    <EventTags/>
                </div>
            </div>
            <div className="events-item-textbox container-fluid">
                <div className="events-item-title col-md-9">
                    <div className="title-text">스타트업 생태계 컨퍼런스 2018</div>
                    <div>2018.04.10</div>
                </div>
                <div className="events-item-date col-md-3">
                    <p className="date-text">D - 5</p>
                </div>
            </div>
        </Panel>
    )
}

export default EventItem;