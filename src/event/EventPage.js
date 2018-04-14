import React, { Component } from 'react';
import { Panel, Image, Table, Alert, Button } from 'react-bootstrap';
import Calendar, { MonthView } from 'react-calendar';
import './eventpage.css';
import EventApplyForm from '../event-apply/EventApplyForm';

class EventPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applyPageDisplay: true
        };
        this.handleApplyClick = this.handleApplyClick.bind(this);
        this.goEventDetails = this.goEventDetails.bind(this);
    }

    goEventDetails() {
        this.setState({
            applyPageDisplay: false
        });
    }

    handleApplyClick() {
        console.log('fuck!');
        this.setState({
            applyPageDisplay: true
        });
    }

    componentWillUnmount() {
        console.log('ssibal! unmount!');
    }

    render() {

        if(this.state.applyPageDisplay) {
            return(
                <EventApplyForm goback={this.goEventDetails}/>
            )
        }

        return(
            <div className="main-eventdetails">
                <div className="container eventdetails-title">
                    <div className="row">
                        <div className="eventtitle-text col-md-8">
                            <h3>테헤란로 런치클럽 - Trend in Vietnam</h3>
                        </div>
                        <div className="eventtitle-details col-md-4">
                            <div className="event-details-eventcode">
                                <span className="event-detail glyphicon glyphicon-tag"/>#lunchclub_vietnam
                            </div>
                            <div className="event-details-href">
                                <span className="event-detail glyphicon glyphicon-paperclip"/>events.startupall.kr/events/lunchclub_vietnam
                            </div>
                        </div>
                    </div>
                </div>
                <div className="eventdetails-body">
                    <Panel className="eventdetails-panel">
                        <Panel.Body className="container event-infopanel">
                            <div className="event-info row">
                                <div className="event-info-img col-md-3">
                                    <Image className="event-img"src="https://scontent-icn1-1.xx.fbcdn.net/v/t1.0-9/30653054_767513896792754_5047096468436077328_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHoKz0bgBTd5YNKD8MprOZ-3xSwhVmTRNHTSGNRuM0g6rBFV5d_8OCX1yohT4NjKy8cAsW8c2iVBDlDp8T0l5AhcM_g3Wyi1LijXWuxuTSZRQ&oh=8be06fbe599b2bf334f25ebcd95cfc21&oe=5B5F9B14"/>
                                </div>
                                <div className="event-info-table col-md-6">
                                    <Table bordered condensed hover>
                                        <tbody>
                                            <tr>
                                                <td>제목</td>
                                                <td>테헤란로 런치클럽 - Trend in Vietnam</td>
                                            </tr>
                                            <tr>
                                                <td>태그</td>
                                                <td><span class="label label-warning">런치클럽</span></td>
                                            </tr>
                                            <tr>
                                                <td>연사</td>
                                                <td>VSV 대표, Thach Le Ahn</td>
                                            </tr>
                                            <tr>
                                                <td>장소</td>
                                                <td>스타트업얼라이언스 &space (선릉역 10번출구 현대타워 7층)</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <div className="event-info-table-bottom">
                                        <div className="eventapply">
                                            
                                            <Alert bsStyle="warning">
                                                <h4><span className="glyphicon glyphicon-warning-sign"/>&nbsp;신청하시기 전에 잠깐!</h4>
                                                <ul>
                                                    <li>스타트업 얼라이언스의 모든 행사는 사전 예약제로 운영됩니다.</li>
                                                    <li>행사 참여신청은 지켜야 할 약속입니다! 당일 불참(No-show)시에는 추후 스얼의 행사에 참여하시지 못할 수도 있습니다.</li>
                                                    <li>일정을 한번 더 확인하시고, 불가피하게 불참하시게 될 경우엔 꼭 연락(contact@startupall.kr)주세요!</li>
                                                </ul>
                                            </Alert>
                                            <Alert bsStyle="danger">
                                                <span className="glyphicon glyphicon-road"/>&nbsp;주차 지원은 불가능합니다. 대중교통을 이용해주세요!
                                            </Alert>
                                        </div>
                                    </div>
                                </div>
                                <div className="event-info-cal col-md-3">
                                    <Calendar className="event-calendar" value={new Date(2018, 3, 16)}/>
                                    <div className="event-info-cal-details center-block">
                                        <div className="eventapply-date">
                                            <span className="glyphicon glyphicon-calendar"/> 2018.04.16 (월)
                                            <br/>
                                            <span className="glyphicon glyphicon-time"/> 오전 11 : 30
                                        </div>
                                    </div>
                                    <button className="btn btn-success event-applybutton-top center-block" onClick={this.handleApplyClick}>참가 신청하기</button>
                                </div>
                            </div>
                            <div className="event-info-description">
                                <h4>행사 상세 안내</h4>
                                <div className="event-info-description-textbox">
                                2017년 스얼과 오픈서베이가 함께 발표한 에서 스타트업 대표가 가장 진출하고자 하는 해외 시장은 동남아였습니다. 많은 동남아 국가 중에서도 베트남은 풍부한 천연자원과 인적자원 (1억 인구 중 70% 이상이 30세 미만) 을 바탕으로 세계에서 가장 빠르게 경제가 성장하고 있는 나라 중 하나죠. 특히 최근 들어 중국의 가파른 물가/인건비 상승을 견디지 못 하는 기업들이 속속 베트남에 새 둥지를 트면서 베트남의 경제전망은 더욱 밝습니다.

또한 스타트업 분야에서 우리나라의 베트남 시장에 대한 관심은 무척 높은데요. 실리콘밸리의 Y- combinator를 모델로 한 VSV는 롯데로부터 $1백만을 투자 받았는가 하면, 한국계 VC인 Big Basin Capital의 송승구파트너를 어드바이저로 영입하였고, 본투글로벌, 홍합벨리 등과의 협력으로 한국 스타트업과 공동 데모데이를 진행하고 있습니다. VSV의 포트폴리오 회사인 Lozi는 한국 유학 출신의 베트남인들이 모여 창업한 회사이기도 하죠. 

그래서 이번 테헤란로 런치클럽에서는 베트남 시장에 기반을 둔 글로벌 액셀러레이터 VSV 대표, Thach Le Ahn을 모시고 '베트남 시장의 동향과 스타트업 생태계' 에 대해 이야기 나눠보고자 합니다. 

베트남 진출을 고려하는 스타트업, 베트남 스타트업 생태계 및 글로벌 액셀러레이터 VSV에 대해 궁금하신 분들은 다음 주 월요일 4월 16일 테헤란로 런치클럽에 오세요 
                                </div>
                            </div>
                            <div className="event-info-bottom">
                                <Button bsStyle="success" className="center-block" onClick={this.handleApplyClick}>행사 신청하기</Button>
                            </div>
                        </Panel.Body>
                    </Panel>
                </div>
            </div>
        )
    }
}

export default EventPage;