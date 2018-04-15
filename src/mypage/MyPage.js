import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import * as selections from './PageSelections.js';
import './mypage.css';
import MyPageMenu from './MyPageMenu.js';
import MyInfo from './MyInfo.js';
import MyEvents from './MyEvents.js';
import MyPassword from './MyPassword.js';
import MyEmail from './MyEmail.js';


class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: selections.MY_INFO
        }
        this.renderMenuComponent = this.renderMenuComponent.bind(this);
    }

    componentDidMount() {
        console.log(this.props.location.pathname);
        this.setState({
            currentMenu: this.props.location.pathname
        });
    }

    renderMenuComponent() {
        switch(this.props.location.pathname) {
            case selections.MY_INFO:
                return MyInfo();

            case selections.MY_EVENTS:
                return MyEvents();
            
            case selections.MY_PWD:
                return MyPassword();
            
            case selections.MY_EMAIL:
                return MyEmail();
        }
    }

    render() {
        console.log(this.state.currentMenu);

        return (
            <div className="myinfo-body container-fluid">
                <div className="myinfo-menu col-md-2">
                    <MyPageMenu href={this.props.location.pathname}/>
                </div>
                {this.renderMenuComponent()}
            </div>
        )
    }
}

export default MyPage;