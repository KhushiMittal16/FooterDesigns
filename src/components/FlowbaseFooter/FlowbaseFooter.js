import React from "react";
import {
  FlowbaseWrapper,
  FlowbaseTopWrapper,
  FlowbaseLinksWrapper,
  FlowbaseBottomWrapper,
} from "./FlowbaseStyled";
import flowbaseLogo from "../../assets/flowbaseLogo.webp";
import starFlowbase from "../../assets/flowbaseStar.svg";
import { RxDiscordLogo, RxLinkedinLogo } from "react-icons/rx";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";
import { Link } from "react-router-dom";
import useViewport from "../../viewport/useViewport";

const FlowbaseFooter = () => {
  const { isTablet, isMobile } = useViewport();
  return (
    <FlowbaseWrapper isTablet={isTablet} isMobile={isMobile}>
      <FlowbaseTopWrapper isTablet={isTablet} isMobile={isMobile}>
        <div className="logo">
          <img src={flowbaseLogo} alt="flowbase" className="footerLogo" />
          <img src={starFlowbase} alt="premium" className="starImg" />
          <div className="premium">Premium Webflow Resources</div>
        </div>
        <div className="socialMedia">
          <div className="followUs">Follow us on social media</div>
          <div className="socialLinks">
            <div className="social">
              <a href="#">
                <RxDiscordLogo />
              </a>
            </div>
            <div className="social">
              <a href="#">
                <RxLinkedinLogo />
              </a>
            </div>
            <div className="social">
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <div className="social">
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </div>
            <div className="social">
              <a href="#">
                <FaFacebookF />
              </a>
            </div>
            <div className="social">
              <a href="#">
                <SiWebflow />
              </a>
            </div>
          </div>
        </div>
      </FlowbaseTopWrapper>
      <FlowbaseLinksWrapper isTablet={isTablet} isMobile={isMobile}>
        <div className="mainDiv">
          {/* <div className="subDiv1"> */}
          <div className="headTop">Explore</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Primium Library</Link>
            </div>
            <div className="links">
              <Link to="/">Community Cloneables</Link>
            </div>
            <div className="links">
              <Link to="/">
                <div className="imgLink">
                  <img
                    src="https://assets.website-files.com/5beab1239ac88487c3a6608f/62f5a58dcea373afd2fd41f1_Webflow%20Icon.svg"
                    alt="webflow"
                  />
                  <div className="linkText">Webflow Extension</div>
                </div>
              </Link>
            </div>
            <div className="links">
              <Link to="/">
                <div className="imgLink">
                  <img
                    src="https://assets.website-files.com/5beab1239ac88487c3a6608f/62f5a58d791f0a2e8962cb24_Figma%20Icon.svg"
                    alt="figma"
                  />
                  <div className="linkText">Figma Plugin</div>
                </div>
              </Link>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="subDiv2"> */}
          <div className="head">POPULAR COMPONENTS</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Navigations</Link>
            </div>
            <div className="links">
              <Link to="/">Footer</Link>
            </div>
            <div className="links">
              <Link to="/">FAQ</Link>
            </div>
            <div className="links">
              <Link to="/">Utility Elements</Link>
            </div>
            <div className="links">
              <Link to="/">Headers</Link>
            </div>
            <div className="links">
              <Link to="/">Content</Link>
            </div>
            <div className="links">
              <Link to="/">Pricing</Link>
            </div>
            <div className="links">
              <Link to="/">Blog</Link>
            </div>
            <div className="links">
              <Link to="/">Testimonials</Link>
            </div>
          </div>
          {/* </div> */}
        </div>
        <div className="mainDiv">
          {/* <div className="subDiv1"> */}
          <div className="headTop">RESOURCES</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Blogs</Link>
            </div>
            <div className="links">
              <Link to="/">Integration</Link>
            </div>
            <div className="links">
              <Link to="/">Press</Link>
            </div>
            <div className="links">
              <Link to="/">Support Articles</Link>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="subDiv2"> */}
          <div className="head">COMPONENT CLUB</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Join the Club</Link>
            </div>
            <div className="links">
              <Link to="/">Pricing</Link>
            </div>
            <div className="links">
              <Link to="/">Browse the Library</Link>
            </div>
          </div>
          {/* </div> */}
          {/* <div className="subDiv3"> */}
          <div className="head">WEBFLOW TOOLS</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Webflow Color Importer</Link>
            </div>
            <div className="links">
              <Link to="/">Color Swatch Organiser</Link>
            </div>
            <div className="links">
              <Link to="/">Webflow Custom Shortcuts</Link>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="mainDiv">
          <div className="headTop">STORE</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">Club Subscription</Link>
            </div>
            <div className="links">
              <Link to="/">Premium Templates</Link>
            </div>
            <div className="links">
              <Link to="/">Digital Assets & Goods</Link>
            </div>
            <div className="links">
              <Link to="/">Webflow Members Template</Link>
            </div>
            <div className="links">
              <Link to="/">Willow Agency Template</Link>
            </div>
          </div>
        </div>
        <div className="mainDiv">
          <div className="headTop">COMPANY</div>
          <div className="allLinks">
            <div className="links">
              <Link to="/">About</Link>
            </div>
            <div className="links">
              <Link to="/">Support Articles</Link>
            </div>
            <div className="links">
              <Link to="/">FAQ</Link>
            </div>
            <div className="links">
              <Link to="/">Contact</Link>
            </div>
            <div className="links">
              <Link to="/">Licence</Link>
            </div>
            <div className="links">
              <Link to="/">Terms of Use</Link>
            </div>
          </div>
        </div>
      </FlowbaseLinksWrapper>
      <FlowbaseBottomWrapper isTablet={isTablet} isMobile={isMobile}>
        <div className="copyrightPowered">
          © 2022 Flowbase. All rights reserved • Powered by{" "}
          <a href="http://webflow.com/">@webflow</a>
        </div>
      </FlowbaseBottomWrapper>
    </FlowbaseWrapper>
  );
};

export default FlowbaseFooter;
