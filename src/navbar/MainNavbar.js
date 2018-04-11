import React from 'react';
import { Navbar } from 'react-bootstrap';
import './navbar.css';


const MainNavbar = (props) => {
    return(
        <Navbar className="global-navbar">
            <Navbar.Header>
                <Navbar.Brand>
                    스타트업 얼라이언스
                </Navbar.Brand>
            </Navbar.Header>
        </Navbar>
    )
}

export default MainNavbar;