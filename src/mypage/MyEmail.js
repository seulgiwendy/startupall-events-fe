import React from 'react';
import { Checkbox, Radio, FormGroup } from 'react-bootstrap';

const MyEmail = (props) => {
    return(
        <div className="myinfo-content col-md-10">
            <h3 className="myinfo-content-title">이메일 수신 설정</h3>
            <div className="myinfo-events-content-body container-fluid">
                <div className="myinfo-content-category col-md-3">
                    <span className="far fa-envelope"/>&nbsp;<strong>이메일 수신 설정</strong>
                </div>
                <div className="myinfo-content-main col-md-9">
                    <strong>스타트업 얼라이언스의 새로운 행사 소식을 이메일로 받아보세요.</strong>
                    <FormGroup>
                        <Checkbox checked={true}>네, 받아보겠습니다.</Checkbox>
                        <Checkbox>아니오, 괜찮아요.</Checkbox>
                    </FormGroup>
                    <button className="btn btn-success">변경하기</button>
                </div>
            </div>
        </div>
        )
}

export default MyEmail;