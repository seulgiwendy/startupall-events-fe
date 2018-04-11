import React from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './navbar.css';


const MainNavbar = (props) => {
    return(
        <Navbar className="main-navbar">
            <Navbar.Header>
                <Navbar.Brand>
                    <Image src="http://startupall.kr/wp/wp-content/uploads/2017/01/favicon-32x32.png"/>
                </Navbar.Brand>
            </Navbar.Header>
                <Nav className="center-navbar">
                    <NavItem id="navitem">My Page</NavItem>
                    <NavItem id="navitem">문의하기</NavItem>
                    <NavItem id="navitem">startupall.kr</NavItem>
                </Nav>
                <Nav className="navbar-useravatar" pullRight>
                    <div className="btn btn-default navbar-userbtn">
                    <div className="navbar-user-img">
                        <Image src="https://www.famousbirthdays.com/faces/seulgi-image.jpg" circle/>
                        <span id="username">seulgiwendy님</span>
                    </div>
                    </div>
                </Nav>
        </Navbar>
    )
}

export default MainNavbar;