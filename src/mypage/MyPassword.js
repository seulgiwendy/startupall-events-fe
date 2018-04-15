import React from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

const MyPassword = (props) => {
    return(
    <div className="myinfo-content col-md-10">
        <h3 className="myinfo-content-title">비밀번호 변경</h3>
        <div className="myinfo-events-content-body container-fluid">
            <div className="myinfo-content-category col-md-3">
                <span className="fas fa-key"/>&nbsp;<strong>비밀번호 변경</strong>
            </div>
            <div className="myinfo-content-main col-md-9">
                <strong>새로운 비밀번호를 설정하세요. 비밀번호는 8자 이상, 특수문자를 2개 이상 포함합니다.</strong>
                <FormGroup>
                    <div className="password-form">
                        <ControlLabel>새 비밀번호</ControlLabel>
                        <FormControl id="password-new" type="password"/>
                    </div>
                    <div className="password-form">
                        <ControlLabel>확인</ControlLabel>
                        <FormControl id="password-confirm" type="password"/>
                    </div>
                </FormGroup>
                <button className="btn btn-success">변경하기</button>
            </div>
        </div>
    </div>
    )
}

export default MyPassword;