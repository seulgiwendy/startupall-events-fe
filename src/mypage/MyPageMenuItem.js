import React from 'react';
import { ListGroupItem } from 'react-bootstrap';


const MyPageMenuItem = (props) => {
    return(
        <ListGroupItem active={props.addr == props.href ? true : false} href={props.href}>{props.menutext}</ListGroupItem>
    )
}

export default MyPageMenuItem;