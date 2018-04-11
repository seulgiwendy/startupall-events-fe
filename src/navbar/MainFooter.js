import React from 'react';
import { Image } from 'react-bootstrap';
import './footer.css';

const MainFooter = (props) => {
    return(
        <div className="main-footer">
            <div className="footer-logo">
                <Image className="logo-img"src="http://startupall.kr/wp/wp-content/uploads/2016/12/black3.png"/>
            </div>
            <div className="footer-text container">
                <div className="textbox-left col-md-6">
                    2018 스타트업 얼라이언스
                    <div className="corporate-info">
                        contact@startupall.kr<br/>
                        http://startupall.kr<br/>
                        070-3333-4444
                    </div>
                </div>
                <div className="textbox-right col-md-6">
                    you!
                </div>
            </div>
        </div>
    )
}

export default MainFooter;