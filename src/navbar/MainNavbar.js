import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import './navbar.css';
import LoginModal from '../login/LoginModal';




class MainNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginExpanded : false
        }

        this.handleLoginButtonOnclick = this.handleLoginButtonOnclick.bind(this);
        this.handleLoginModalDismiss = this.handleLoginModalDismiss.bind(this);
    }

    handleLoginButtonOnclick() {
        this.setState({
            loginExpanded: true
        })
    }

    handleLoginModalDismiss() {
        this.setState({
            loginExpanded: false
        });
    }

    render() {
        console.log(this.state.loginExpanded);

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
                        <button className="btn btn-default navbar-userbtn" onClick={this.handleLoginButtonOnclick}>
                        <div className="navbar-user-img">
                            <Image src="https://www.famousbirthdays.com/faces/seulgi-image.jpg" circle/>
                            <span id="username">seulgiwendy님</span>
                        </div>
                        </button>
                    </Nav>
                    <LoginModal showModal={this.state.loginExpanded} hideModal={this.handleLoginModalDismiss}/>
            </Navbar>
        )
    }
}

export default MainNavbar;