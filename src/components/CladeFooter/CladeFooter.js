import React from "react";
import { CladeWrapper } from "./CladeStyled";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineDribbble,
} from "react-icons/ai";
import useViewport from "../../viewport/useViewport";
const CladeFooter = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <CladeWrapper isMobile={isMobile} isTablet={isTablet}>
      <Row gutter={[16, 24]}>
        <Col xs={24} md={24} lg={12}>
          <div className="clade">
            <div className="cladeLogo">
              <div className="logoImgClade">
                <img
                  src="https://assets.website-files.com/5dbaec16f510ee7b1c0004d6/5dcc6889e62de159824c8a0b_logo-footer-pink.svg"
                  alt="clade"
                />
              </div>
              <div className="cladeDesign">
                CLADE <br /> DESIGN
              </div>
            </div>
            <Link to="/">
              <div className="contactBtn">CONTACT US</div>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={12} lg={5}>
          <div className="pageLinks">
            <Link to="/">
              <div className="pages">HOME</div>
            </Link>
            <Link to="/">
              <div className="pages">CLIENT WORK</div>
            </Link>
            <Link to="/">
              <div className="pages">OUR PRODUCTS</div>
            </Link>
            <Link to="/">
              <div className="pages">ABOUT</div>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={12} lg={5}>
          <div className="socialLinks">
            <a href="https://www.instagram.com" target="_blank">
              <div className="social">
                <AiOutlineInstagram />
              </div>
            </a>
            <a href="https://www.linkdin.com" target="_blank">
              <div className="social">
                <AiOutlineTwitter />
              </div>
            </a>
            <a href="https://www.dribbble.com" target="_blank">
              <div className="social">
                <AiOutlineDribbble />
              </div>
            </a>
          </div>
        </Col>
      </Row>
    </CladeWrapper>
  );
};

export default CladeFooter;
