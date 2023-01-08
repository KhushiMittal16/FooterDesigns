import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { BorderRadius, FontType, PaddingValues } from "../../config/Values";
import vectornatorLogo from "../../assets/vetornatorLogo.svg";
import vectornatorLogoHover from "../../assets/vetornatorLogoHover.svg";

export const VectornatorWrapper = styled.div`
  padding: ${({ isMobile }) =>
    isMobile
      ? `${PaddingValues.padding128} ${PaddingValues.padding24} ${PaddingValues.padding60}`
      : `${PaddingValues.padding128} ${PaddingValues.padding35} ${PaddingValues.padding60}`};
  background-color: ${Colors.black};
  font-size: small;
  font-family: ${FontType.fontInter} sans-serif;

  a {
    color: ${Colors.linkGray};
    text-decoration: none;
  }
`;

export const VectornatorLinkWrapper = styled.div`
  padding: 0px 0px ${PaddingValues.padding60};
  border-bottom: 1px solid hsl(0deg 0% 100% / 10%);

  .head {
    font-weight: 700;
    color: ${Colors.white};
  }

  .links {
    padding: ${PaddingValues.padding5};
    & :hover {
      color: ${Colors.purple};
      text-decoration: underline;
    }
  }

  .newsletterText {
    color: ${Colors.linkGray};
    padding: ${PaddingValues.padding12} 0px;
  }

  .allLinks {
    padding: ${PaddingValues.padding12} 0px;
  }

  .shapeBuild {
    display: flex;
    align-items: flex-start;
  }

  .supNew {
    background-color: ${Colors.lightPurple};
    color: ${Colors.white};
    border-radius: ${BorderRadius.smallRadius};
    padding: 3px ${PaddingValues.padding5};
    font-weight: 500;
  }

  .socialMedia {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.5em;

    width: ${({ isMobile, isTablet }) =>
      isMobile ? "" : isTablet ? "70%" : ""};
  }

  .inputEmail {
    margin: ${PaddingValues.padding35} 0px;
    display: flex;
    justify-content: space-between;
    border: 2px solid ${Colors.linkGray};
    padding: ${PaddingValues.padding8};
    border-radius: ${BorderRadius.border100};
  }

  .icons :hover {
    color: ${Colors.purple};
  }

  .inputVal {
    border: none;
    outline: none;
    background-color: transparent;
    color: ${Colors.white};
    padding-left: ${PaddingValues.padding12};
    width: ${({ isMobile }) => (isMobile ? "90%" : "")};
  }

  .subscribeBtn {
    font-weight: 700;
    background-image: url('data:image/svg+xml;utf8,<svg   xmlns="http://www.w3.org/2000/svg" ><defs><linearGradient id="Gradient" x1="40%" x2="55%" y1="100%" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="%23FF0171" offset="0"/><stop stop-color="%23FFEB06" offset="1"/></linearGradient></defs><rect x="2" y="2" width="100%" height="100%" style="height:calc(100% - 4px);width:calc(100% - 4px)" rx="20" ry="20" stroke-width="2" fill="transparent" stroke="url(%23Gradient)"/></svg>');
    background-size: cover;
    background-color: transparent;
    color: ${Colors.white};
    padding: ${PaddingValues.padding12} ${PaddingValues.padding16};
    border-radius: ${BorderRadius.border100};
  }
`;

export const VectornatorBottomWrapper = styled.div`
  padding-top: ${PaddingValues.padding24};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};

  .vectornator {
    display: flex;
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
    justify-content: center;
    align-items: center;
  }

  .headCopyright {
    padding: ${({ isMobile }) =>
      isMobile
        ? `${PaddingValues.padding8} 0px 0px 0px`
        : `0px 0px 0px ${PaddingValues.padding12}`};
  }

  .vectornatorHead {
    color: ${Colors.white};
    font-weight: 700;
    font-size: 1rem;
    padding-bottom: ${PaddingValues.padding12};
  }

  .copyright {
    color: ${Colors.linkGray};
  }

  .logo {
    background-image: url(${vectornatorLogo});
    width: 48px;
    height: 48px;
    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
      background-image: url(${vectornatorLogoHover});
    }
  }

  .privacyLinks {
    display: flex;
    justify-content: ${({ isMobile }) => (isMobile ? "space-between" : "row")};
    margin-top: ${({ isMobile }) =>
      isMobile ? `${PaddingValues.padding24}` : ""};
  }

  .others {
    padding: ${({ isMobile }) =>
      isMobile
        ? `0px ${PaddingValues.padding24}`
        : `0px ${PaddingValues.padding12}`};

    & :hover {
      color: ${Colors.purple};
      text-decoration: underline;
    }
  }

  .cookies {
    padding: ${({ isMobile }) =>
      isMobile
        ? `0px ${PaddingValues.padding24}`
        : `0px ${PaddingValues.padding12}`};
    border-left: 1px solid ${Colors.avoLinkColors};
    border-right: 1px solid ${Colors.avoLinkColors};

    & :hover {
      color: ${Colors.purple};
      text-decoration: underline;
    }
  }
`;
