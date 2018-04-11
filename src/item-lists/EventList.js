import React from 'react';
import './events.css';
import EventItem from './EventItem';

const EventList = (props) => {
    return(
        <div className="events-list">
            <EventItem/>
            <EventItem/>
            <EventItem/>
            <EventItem/>
        </div>
    )

}

export default EventList;