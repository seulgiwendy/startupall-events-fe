import React from 'react';
import { Navbar } from 'react-bootstrap';
import './navbar.css';


const MainNavbar = (props) => {
    return(
        <Navbar className="main-navbar">
            <Navbar.Header>
                <Navbar.Brand>
                    <span className="navbar-startupall">스타트업 얼라이언스</span>
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    )
}

export default MainNavbar;