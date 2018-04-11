import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import './eventpage.css';

class EventPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="main-eventdetails">
                <div className="eventdetails-title">
                    <h3 className="eventtitle-text">스타트업 생태계 컨퍼런스 2018</h3>
                </div>
                <div className="eventdetails-body">
                    <Panel className="eventdetails-panel">


                    </Panel>
                </div>
            </div>
        )
    }
}

export default EventPage;