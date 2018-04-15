import React from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import './mypage.css';
import MyPageMenuItem from './MyPageMenuItem';

const MyPageMenu = (props) => {

    return (
        <ListGroup>
            <MyPageMenuItem addr={props.href}  href="/mypage/myinfo" menutext="내 정보"/>
            <MyPageMenuItem addr={props.href} href="/mypage/myevents" menutext="내 행사"/>
            <MyPageMenuItem addr={props.href} href="/mypage/password" menutext="비밀번호"/>
            <MyPageMenuItem addr={props.href} href="/mypage/email" menutext="이메일 수신 설정"/>
            <MyPageMenuItem addr={props.href} href="/mypage/noshow" menutext="노쇼 행사 목록"/>

        </ListGroup>
    )
}

export default MyPageMenu;