import React from 'react';
import MyEventsTable from './MyEventsTable';

const MyEvents = (props) => {
    return (
    <div className="myinfo-content col-md-10">
        <h3 className="myinfo-content-title">내 행사</h3>
        <div className="myinfo-events-content-body container-fluid">
            <span className="fas fa-calendar-alt"/>&nbsp;<strong>참가 신청한 행사</strong>
            <div className="myinfo-events-eventstable">
                <MyEventsTable/>
            </div>
        </div>
    </div>
    )
}

export default MyEvents;