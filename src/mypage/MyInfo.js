import React from 'react';

const MyInfo = (props) => {

    return(
        <div className="myinfo-content col-md-10">
        <h3 className="myinfo-content-title">내 정보</h3>
        <div className="myinfo-content-body container-fluid">
            <div className="row myinfo-content-row">
                <div className="myinfo-content-category col-md-3">
                    <span className="fas fa-user"/>&nbsp;<strong>기본 정보</strong>
                </div>
                <div className="myinfo-content-main col-md-9">
                    <div className="myinfo-field info-name-company">정호영</div>
                    <div className="myinfo-field info-email">honux@codesquad.kr</div>
                </div>
            </div>
            <div className="row myinfo-content-row">
                <div className="myinfo-content-category col-md-3">
                    <span className="fas fa-mobile-alt"/>&nbsp;<strong>등록된 연락처</strong>
                </div>
                <div className="myinfo-content-main col-md-9">
                    010-4723-4716
                </div>
            </div>
            <div className="row myinfo-content-row">
                <div className="myinfo-content-category col-md-3">
                    <span className="fas fa-briefcase"/>&nbsp;<strong>소속</strong>
                </div>
                <div className="myinfo-content-main col-md-9">
                    코드스쿼드
                </div>
            </div>
            <div className="row myinfo-content-row">
                <div className="myinfo-content-category col-md-3">
                    <span className="fas fa-id-badge"/>&nbsp;<strong>직함</strong>
                </div>
                <div className="myinfo-content-main col-md-9">
                    마스터
                </div>
            </div>
        </div>
    </div>
    )

}

export default MyInfo;