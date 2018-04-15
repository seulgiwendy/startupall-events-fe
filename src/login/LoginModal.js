import React, { Component } from 'react';
import { Modal, FormGroup, FormControl } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import './login.css';

class LoginModal extends Component {

    constructor(props) {
        super(props);

        this.userLoggedIn = this.userLoggedIn.bind(this);
        this.userLoggedOut = this.userLoggedOut.bind(this);
     
    }

    componentDidMount() {
        
    }

    userLoggedIn(response) {
        console.log(response);
    }

    userLoggedOut() {
        console.log('fuck! logout!');
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.hideModal} onEntered={this.modalShow}dialogClassName="login-modal">
                <Modal.Header closeButton>
                    <Modal.Title>로그인</Modal.Title>
                </Modal.Header>
                <Modal.Body className="loginmodal-body container-fluid">
                    
                    <div className="row">
                    <div className="loginmodal-form col-md-6">
                    <h4 className="text-center">회원 로그인</h4>
                        <form>
                            <FormGroup>
                                <FormControl className="loginmodal-box loginmodal-email" id="loginEmail" type="email" placeholder="로그인 이메일"/>   
                                <FormControl className="loginmodal-box loginmodal-password" id="loginPassword" type="password" placeholder="비밀번호(8자 이상)"/>
                            </FormGroup>
                            <a className="loginmodal-box loginmodal-iforgot">계정을 잃어버리셨나요?</a>
                            
                        </form>
                        <div className="loginmodal-form-buttons">
                            <button className="btn btn-primary login-button"><span className="login-icons fas fa-sign-in-alt"/>로그인</button>
                            <button className="btn btn-default login-button"><span className="login-icons fas fa-user-plus"/>회원 가입</button>
                        </div>
                    </div>
                    <div className="loginmodal-social col-md-6">
                        <h4 className="text-center">소셜 로그인</h4>
                        <div className="social-form-textbox">
                            소셜 계정으로 스타트업 얼라이언스의 행사를 편리하게 예약하세요!<br/>
                            (처음 한 번은 회원가입이 필요합니다.)
                        </div>
                        <button className="social-button kakao-button"></button>
                        <button className="btn btn-default social-button naver-button"></button>
                        <button className="social-button btn btn-block btn-social btn-facebook"><span className="fab fa-facebook"></span>Facebook 로그인</button>
                    </div>
                    </div>
                </Modal.Body>
            </Modal>
        )
    } 
}

export default LoginModal;