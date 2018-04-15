import React from 'react';
import { ListGroup, ListGroupItem, Label, Image } from 'react-bootstrap';
import './mypage.css';


const MyEventsTable = (props) => {
    return(
        <ListGroup className="myinfo-events-tablecontent">
            <ListGroupItem className="myinfo-events-tablecontent-item container-fluid">
            <div className="row">
                <div className="col-md-7 events-title">
                    <h3>테헤란로 런치클럽 - Trend in Vietnam</h3>
                    <span className=""/>#teheran_lunchclub_100th
                </div>
                <div className="col-md-2">
                    <Image src='https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/29683970_764096043801206_9166519702491995696_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHUqluaoSmO_vm8T4et20K8vxhgFdZxk_JTaC8GEh3oO2M1SLHSwg1qZ7aQ2B65qTq9vmZ_9uBmPIFfVOrVh5fMVJBNVImnPx6oPt8i9dsfbA&oh=933771e9d0f67467fa16517a58e2ba2c&oe=5B29F295' className="events-img"/>
                </div>
                <div className="col-md-3 text-right events-datetime">
                    <div className="events-date"><span className="fas fa-calendar-alt"/>&nbsp;2018.04.16</div>
                    <div className="events-time"><span className="far fa-clock"/>&nbsp;오전 11 : 30</div><br/>
                    <a className="btn btn-danger events-cancel" href="#">신청 취소</a>
                </div>
            </div>
            </ListGroupItem>
        </ListGroup>
    )
}

export default MyEventsTable;