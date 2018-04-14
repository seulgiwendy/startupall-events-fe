import React, { Component } from 'react';
import './eventform.css';
import { FormGroup, FormControl, ControlLabel, Radio, Checkbox } from 'react-bootstrap';

class EventApplyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            eventApplyInfo: undefined
        };
    }

    componentDidMount() {
        console.log('fuck!');
        this.setState({
            eventApplyInfo: 1
        });
        window.scrollTo(0, 0);
    }

    render() {
        return(
            <div className="eventform-body">
                <div className="eventform-title container">
                    <div className="eventform-title-caption text-center">
                        <h3>행사 신청하기</h3>
                        테헤란로 런치클럽 - Trend In Vietnam<br/>
                        <button className="btn btn-default" onClick={this.props.goback}><span className="glyphicon glyphicon-hand-left"/>&nbsp;행사정보로 돌아가기</button> 
                    </div>
                    <div className="eventform-panel">
                        <div className="eventform-question-box container">
                            <div className="eventform-question-title col-md-2">
                                <span className="glyphicon glyphicon-user"/>&nbsp;<strong>참가자 정보</strong>
                            </div>
                            <div className="eventform-question-title col-md-10">
                                <div className="eventform-details eventform-question-name"><span className="glyphicon glyphicon-user"/>&nbsp;정호영</div>
                                <div className="eventform-details eventform-question-email"><span className="glyphicon glyphicon-envelope"/>&nbsp;honux@codesquad.kr</div>
                                <div className="eventform-details eventform-question-company"><span className="glyphicon glyphicon-folder-close"/>&nbsp;마스터, 코드스쿼드</div>
                            </div>
                        </div>
                        <div className="eventform-question-box container">
                            <div className="eventform-question-title col-md-2">
                                <span className="glyphicon glyphicon-check"/>&nbsp;<strong>참가 동기</strong>
                            </div>
                            <div className="eventform-custom-question col-md-10">
                                <div className="eventform-details eventform-custom-title"><strong>이번 행사에 참여하시게 된 이유는?</strong></div>
                                <div className="eventform-details eventform-custom-subtitle">최대한 자세히 기술해 주세요.</div>
                                <div className="eventform-details eventform-custom-answer">
                                    <FormGroup>
                                        <ControlLabel>0/200</ControlLabel>
                                        <FormControl componentClass="textarea" placeholder="답변"/>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="eventform-question-box container">
                            <div className="eventform-question-title col-md-2">
                                <span className="glyphicon glyphicon-check"/>&nbsp;<strong>베트남 이주 의사</strong>
                            </div>
                            <div className="eventform-custom-question col-md-10">
                                <div className="eventform-details eventform-custom-title"><strong>향후 3년 안에 베트남 이민 계획이 있으신가요?</strong></div>
                                <div className="eventform-details eventform-custom-subtitle">최대한 솔직히 답변해 주세요.</div>
                                <div className="eventform-details eventform-custom-answer">
                                    <FormGroup>
                                        <Radio name="answerOptions">네, 있습니다.</Radio>
                                        <Radio name="answerOptions">아니오, 한국이 좋아요.</Radio> 
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                        <div className="eventform-question-box container">
                            <div className="eventform-question-title col-md-2">
                                <span className="glyphicon glyphicon-saved"/>&nbsp;<strong>개인정보 수집 동의</strong>
                            </div>
                            <div className="eventform-custom-question col-md-10">
                                <div className="eventform-details eventform-custom-title"><strong>제공해주신 신상정보는 행사 참석 인원 파악 이외의 용도에는 사용하지 않습니다.</strong></div>
                                <div className="eventform-details eventform-custom-subtitle"></div>
                                <div className="eventform-details eventform-custom-answer">
                                    <FormGroup>
                                        <Checkbox inline>네, 개인정보 수집에 동의합니다.</Checkbox>
                                    </FormGroup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }

}

export default EventApplyForm;