import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Tooltip } from "antd";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineWeibo,
  AiOutlineWechat,
} from "react-icons/ai";
import { FaFacebookF, FaLinkedin, FaTiktok } from "react-icons/fa";
import { RiBilibiliLine } from "react-icons/ri";
import vectornatorLogo from "../../assets/vetornatorLogo.svg";
import useViewport from "../../viewport/useViewport";
import {
  VectornatorWrapper,
  VectornatorLinkWrapper,
  VectornatorBottomWrapper,
} from "./VectornatorStyled";

const VectornatorFooter = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <VectornatorWrapper isTablet={isTablet} isMobile={isMobile}>
      <VectornatorLinkWrapper isTablet={isTablet} isMobile={isMobile}>
        <Row gutter={[16, 24]}>
          <Col xs={12} md={6} lg={4}>
            <div className="head">Use Cases</div>
            <div className="allLinks">
              <div className="shapeBuild">
                <div className="links">
                  <Link to="/">Shape Builder</Link>
                </div>
                <sup className="supNew">New</sup>
              </div>
              <div className="links">
                <Link to="/">Auto Trace</Link>
              </div>
              <div className="links">
                <Link to="/">Brush Tool</Link>
              </div>
              <div className="links">
                <Link to="/">Pen Tool</Link>
              </div>
              <div className="links">
                <Link to="/">Illustration</Link>
              </div>
              <div className="links">
                <Link to="/">UI Design</Link>
              </div>
              <div className="links">
                <Link to="/">Lettering</Link>
              </div>
              <div className="links">
                <Link to="/">Print</Link>
              </div>
              <div className="links">
                <Link to="/">PDF Editing</Link>
              </div>
              <div className="links">
                <Link to="/">Isometric Grid</Link>
              </div>
              <div className="links">
                <Link to="/">iPad Graphic Design</Link>
              </div>
              <div className="links">
                <Link to="/">Business Cards</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="head">Resources</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">Blog</Link>
              </div>
              <div className="links">
                <Link to="/">What's New</Link>
              </div>
              <div className="links">
                <Link to="/">Dictionary</Link>
              </div>
              <div className="links">
                <Link to="/">Template Hub</Link>
              </div>
              <div className="links">
                <Link to="/">Iconator</Link>
              </div>
              <div className="links">
                <Link to="/">Change History</Link>
              </div>
              <div className="links">
                <Link to="/">Archive</Link>
              </div>
              <div className="links">
                <Link to="/">Beta Program</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="head">Company</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">About</Link>
              </div>
              <div className="links">
                <Link to="/">Press Kit</Link>
              </div>
              <div className="links">
                <Link to="/">Careers</Link>
              </div>
              <div className="links">
                <Link to="/">Support</Link>
              </div>
              <div className="links">
                <Link to="/">FAQ</Link>
              </div>
              <div className="links">
                <Link to="/">Code of Conduct</Link>
              </div>
              <div className="links">
                <Link to="/">Feature Request</Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="head">Compare</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">Adobe Illustration</Link>
              </div>
              <div className="links">
                <Link to="/">Affinity Design</Link>
              </div>
              <div className="links">
                <Link to="/">Sketch</Link>
              </div>
              <div className="links">
                <Link to="/">Inkscape</Link>
              </div>
              <div className="links">
                <Link to="/">Paint for Mac</Link>
              </div>
              <div className="links">
                <Link to="/">Procreate</Link>
              </div>
              <div className="links">
                <Link to="/">Figma</Link>
              </div>
              <div className="links">
                <Link to="/">Canva</Link>
              </div>
              <div className="links">
                <Link to="/">PDF Editing</Link>
              </div>
              <div className="links">
                <Link to="/">Pixelmator</Link>
              </div>
            </div>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <div className="newsletter">
              <div className="head">Join Our Newsletter</div>
              <div className="newsletterText">
                Stay up to date with our news, blog posts, and announcements by
                subscribing to our Newsletter.
              </div>
              <div className="inputEmail">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="inputVal"
                />
                <button className="subscribeBtn">Subscribe</button>
              </div>
            </div>
            <div className="socialMedia">
              <Tooltip title="Facebook" color="#333">
                <div className="icons">
                  <a href="#">
                    <FaFacebookF />
                  </a>
                </div>
              </Tooltip>

              <Tooltip title="Twitter" color="#333">
                <div className="icons">
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </div>
              </Tooltip>

              <Tooltip title="LinkedIn" color="#333">
                <div className="icons">
                  <a href="#">
                    <FaLinkedin />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="Instagram" color="#333">
                <div className="icons">
                  <a href="#">
                    <AiOutlineInstagram />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="Youtube" color="#333">
                <div className="icons">
                  <a href="#">
                    <AiFillYoutube />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="BiliBili" color="#333">
                <div className="icons">
                  <a href="#">
                    <RiBilibiliLine />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="Weibo" color="#333">
                <div className="icons">
                  <a href="#">
                    <AiOutlineWeibo />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="WeChat" color="#333">
                <div className="icons">
                  <a href="#">
                    <AiOutlineWechat />
                  </a>
                </div>
              </Tooltip>
              <Tooltip title="Tik Tok" color="#333">
                <div className="icons">
                  <a href="#">
                    <FaTiktok />
                  </a>
                </div>
              </Tooltip>
            </div>
          </Col>
        </Row>
      </VectornatorLinkWrapper>
      <VectornatorBottomWrapper isTablet={isTablet} isMobile={isMobile}>
        <div className="vectornator">
          <Link to="/">
            <div className="logo"></div>
          </Link>
          <div className="headCopyright">
            <div className="vectornatorHead">Vectornator</div>
            <div className="copyright">
              © 2022 Linearity GmbH. All rights reserved
            </div>
          </div>
        </div>
        <div className="privacyLinks">
          <div className="others">
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="cookies">
            <Link to="/">Cookies</Link>
          </div>
          <div className="others">
            <Link to="/">Legal</Link>
          </div>
        </div>
      </VectornatorBottomWrapper>
    </VectornatorWrapper>
  );
};

export default VectornatorFooter;
