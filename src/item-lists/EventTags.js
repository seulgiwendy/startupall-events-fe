import React from 'react';
import { Label } from 'react-bootstrap';

const EventTags = (props) => {
    return(
        <div className="events-item-tags">
            <Label className="event-tag" bsStyle="default">PRIVATE</Label>
            <Label className="event-tag" bsStyle="success">#2018생컨</Label>
        </div>
    )
}

export default EventTags;