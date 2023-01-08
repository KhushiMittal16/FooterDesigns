import React from "react";
import {
  GetastraBottomWrapper,
  GetastraTopWrapper,
  GetastraWrapper,
} from "./GetastraStyled";
import { Link } from "react-router-dom";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaWordpress,
  FaLinkedin,
} from "react-icons/fa";
import useViewport from "../../viewport/useViewport";

const GetastraFooter = () => {
  const { isMobile, isTablet } = useViewport();
  return (
    <GetastraWrapper>
      <GetastraTopWrapper isMobile={isMobile} isTablet={isTablet}>
        <div className="about">
          <div className="astraLogo">
            <img
              src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba8e1fa955ef_logo.svg"
              alt="getastra"
              width="105px"
            />
          </div>
          <div className="astraText">
            Astra Security Suite makes security simple and hassle-free for
            thousands of websites & businesses worldwide
          </div>
          <div className="socialMedia">
            <div className="socials">
              <FaTwitterSquare />
            </div>
            <div className="socials">
              <FaFacebookSquare />
            </div>
            <div className="socials">
              <FaYoutubeSquare />
            </div>
            <div className="socials">
              <FaWordpress />
            </div>
            <div className="socials">
              <FaLinkedin />
            </div>
          </div>
          <div className="seeReview">See our glowing reviews on</div>
          <div className="reviews">
            <a
              href="https://www.trustpilot.com/review/getastra.com"
              target="_blank"
            >
              <div className="trustPilot">
                <img
                  src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba5225a95724_hf.svg"
                  alt="Trustpilot"
                />
              </div>
            </a>
            <a
              href="https://www.capterra.com/p/266510/Astra-Security/"
              target="_blank"
            >
              <div className="capterra">
                <img
                  src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba35baa95722_ghc.svg"
                  alt="Trustpilot"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="pentestWebProtect">
          <div className="otherDetails">
            <div className="head">Pentest</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">Features</Link>
              </div>
              <div className="links">
                <Link to="/">Web Pentest</Link>
              </div>
              <div className="links">
                <Link to="/">Mobile Pentest</Link>
              </div>
              <div className="links">
                <Link to="/">API Pentest</Link>
              </div>
              <div className="links">
                <Link to="/">Blockchain Pentest</Link>
              </div>
              <div className="links">
                <Link to="/">Network Pentest</Link>
              </div>
            </div>
          </div>
          <div className="otherDetails">
            <div className="head">Website Protection</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">Features</Link>
              </div>
              <div className="links">
                <Link to="/">For Agencies</Link>
              </div>
              <div className="links">
                <Link to="/">Wordpress Protection</Link>
              </div>
              <div className="links">
                <Link to="/">Magento Protection</Link>
              </div>
              <div className="links">
                <Link to="/">Prestashop Protection</Link>
              </div>
              <div className="links">
                <Link to="/">OpenCart Protection</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="companyResources">
          <div className="otherDetails">
            <div className="head">Company</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">What's New</Link>
              </div>
              <div className="links">
                <Link to="/">About</Link>
              </div>
              <div className="links">
                <Link to="/">Customers</Link>
              </div>
              <div className="links">
                <Link to="/">Carees</Link>
              </div>
              <div className="links">
                <Link to="/">Contact Us</Link>
              </div>
              <div className="links">
                <Link to="/">Help Articles</Link>
              </div>
              <div className="links">
                <Link to="/">System Status</Link>
              </div>
            </div>
          </div>
          <div className="otherDetails">
            <div className="head">Resources</div>
            <div className="allLinks">
              <div className="links">
                <Link to="/">Astra Security Blog</Link>
              </div>
              <div className="links">
                <Link to="/">Blacklist Checker</Link>
              </div>
              <div className="links">
                <Link to="/">Website Scanner</Link>
              </div>
              <div className="links">
                <Link to="/">SEO Spam Checker</Link>
              </div>
              <div className="links">
                <Link to="/">Security Courses</Link>
              </div>
              <div className="links">
                <Link to="/">Security Checklists</Link>
              </div>
              <div className="links">
                <Link to="/">Support & Documentation</Link>
              </div>
            </div>
          </div>
        </div>
      </GetastraTopWrapper>
      <GetastraBottomWrapper isMobile={isMobile} isTablet={isTablet}>
        <div className="made">
          <div className="madeIn">Made with ❤️ in</div>
          <div className="countries">
            <div className="countryImg">
              <img
                src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba1b44a957b4_299722.png"
                alt="country"
                width="16px"
              />{" "}
            </div>
            <div className="countryImg">
              <img
                src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba3520a957ae_299753.png"
                alt="country"
                width="16px"
              />{" "}
            </div>
            <div className="countryImg">
              <img
                src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba035ca957b5_299786.png"
                alt="country"
                width="16px"
              />{" "}
            </div>
            <div className="countryImg">
              <img
                src="https://global-uploads.webflow.com/5f80230f2eb0ba0ee5a95589/5f80230f2eb0ba2142a957b3_299702.png"
                alt="country"
                width="16px"
              />{" "}
            </div>
          </div>
        </div>
        <div className="copyright">
          <span className="textCopyright">Copyright © 2023</span>
          <span className="astraIt">ASTRA IT, Inc</span>
          <span className="reserved">All Rights Reserved</span>
        </div>
        <div className="linksPrivacy">
          <div className="privacy">
            <Link to="/">Privacy Policy</Link>
          </div>
          <div className="terms">
            <Link to="/">Terms of Services</Link>
          </div>
          <div className="privacy">
            <Link to="/">Report a vulnerability</Link>
          </div>
        </div>
      </GetastraBottomWrapper>
    </GetastraWrapper>
  );
};

export default GetastraFooter;
