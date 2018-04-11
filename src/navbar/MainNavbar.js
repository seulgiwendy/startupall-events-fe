import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './navbar.css';


const MainNavbar = (props) => {
    return(
        <Navbar className="main-navbar container-fluid">
            <Navbar.Header>
                <Navbar.Brand>
                    <Image src="http://startupall.kr/wp/wp-content/uploads/2017/01/favicon-32x32.png"/>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
                <NavItem>My Page</NavItem>
                <NavItem>문의하기</NavItem>
                <NavItem>startupall.kr</NavItem>
            </Nav>
        </Navbar>
    )
}

export default MainNavbar;