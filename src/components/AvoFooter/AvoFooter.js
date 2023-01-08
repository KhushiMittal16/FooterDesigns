import React from "react";
import { AvoWrapper, AvoLinksWrapper } from "./AvoStyled";
import AvoImg from "../../assets/avoFooterImg.png";
import AvoLogo from "../../assets/avoLogo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import useViewport from "../../viewport/useViewport";

const AvoFooter = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <AvoWrapper isMobile={isMobile} isTablet={isTablet}>
      <div className="imgAndLevelUp">
        <div className="levelUpTracking">
          <div className="readyTracking">Ready to level up your tracking?</div>
          <div className="productButtons">
            <Link to="/">
              <div className="signIn">SIGN UP FOR FREE</div>
            </Link>
            <Link to="/">
              <div className="productTour">TAKE PRODUCT TOUR</div>
            </Link>
          </div>
        </div>
        <div className="avoImgDiv">
          <img src={AvoImg} alt="avo" className="avoImg" />
        </div>
      </div>
      <AvoLinksWrapper isMobile={isMobile} isTablet={isTablet}>
        <div className="avoAbout">
          <div className="avoLogo">
            <img src={AvoLogo} alt="logo" className="avoLogoImg" />
          </div>
          <div className="avoText">
            Ship quality insights in an hours, not days or weeks.
          </div>
        </div>
        <div className="linksAvo">
          <div className="aboutLinks">
            <Link to="/">
              <div className="linksFooter">About</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">Jobs</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">Docs</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">Security</div>
            </Link>
          </div>
          <div className="terms">
            <Link to="/">
              <div className="linksFooter">Terms and Conditions</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">Privacy Policy</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">Cookie Policy</div>
            </Link>
          </div>
          <div className="socialLinks">
            <Link to="/">
              <div className="linksFooter">Let's chat</div>
            </Link>
            <Link to="/">
              <div className="linksFooter">hi@avo.app</div>
            </Link>
            <div className="socialMedia">
              <div className="icons">
                <a href="#">
                  <AiOutlineFacebook />
                </a>
              </div>
              <div className="icons">
                <a href="#">
                  <FiTwitter />
                </a>
              </div>
              <div className="icons">
                <a href="#">
                  <AiOutlineLinkedin />
                </a>
              </div>
              <div className="icons">
                <a href="#">
                  <AiOutlineInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </AvoLinksWrapper>
    </AvoWrapper>
  );
};

export default AvoFooter;
