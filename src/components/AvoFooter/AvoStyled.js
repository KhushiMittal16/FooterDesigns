import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { BorderRadius, PaddingValues, FontType } from "../../config/Values";

export const AvoWrapper = styled.div`
  color: ${Colors.white};
  background-color: ${Colors.avoBGBlack};
  padding: ${PaddingValues.padding60} ${PaddingValues.padding16};
  font-family: ${FontType.fontInter};
  .imgAndLevelUp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: ${Colors.white};
  }

  .readyTracking {
    font-size: 2em;
    font-weight: 700;
    margin: ${({ isTablet }) =>
      isTablet
        ? ` ${PaddingValues.padding128} 0px ${PaddingValues.padding16}`
        : ` ${PaddingValues.padding16} ${PaddingValues.padding12}`};
  }

  .productButtons {
    display: flex;
    font-size: small;
    font-weight: 600;
  }

  .signIn {
    margin: ${({ isTablet }) =>
      isTablet
        ? ` 0px ${PaddingValues.padding16} 0px 0px`
        : `0px ${PaddingValues.padding16}`};
    padding: ${PaddingValues.padding12} ${PaddingValues.padding16};
    background-color: ${Colors.signUpAvo};
    border-radius: ${BorderRadius.xsradius};
    &:hover {
      background-color: ${Colors.btnHoverAvo};
    }
  }

  .productTour {
    margin: 0px ${PaddingValues.padding16};
    padding: ${PaddingValues.padding12} ${PaddingValues.padding16};
    border: 1px solid ${Colors.signUpAvo};
    border-radius: ${BorderRadius.xsradius};
    &:hover {
      background-color: ${Colors.btnHoverAvo};
    }
  }

  .avoImgDiv {
    position: ${({ isTablet }) => (isTablet ? `absolute` : "")};
    margin: ${({ isMobile }) =>
      isMobile
        ? ``
        : `0px ${PaddingValues.padding35} ${PaddingValues.padding24} 0px`};
    top: ${PaddingValues.padding60};
    right: ${({ isMobile }) =>
      isMobile ? `${PaddingValues.padding24}` : `${PaddingValues.padding50}`};
  }

  .avoImg {
    width: ${({ isTablet }) => (isTablet ? "200px" : "281px")};
  }
`;

export const AvoLinksWrapper = styled.div`
  display: flex;
  margin-top: ${PaddingValues.padding50};
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};

  .avoAbout {
    width: ${({ isMobile }) => (isMobile ? "100%" : "40%")};
  }

  .avoLogoImg {
    width: 75px;
  }

  .avoText {
    margin-top: ${PaddingValues.padding16};
  }

  .linksAvo {
    width: ${({ isMobile }) => (isMobile ? "" : "60%")};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: ${({ isMobile }) =>
      isMobile ? `${PaddingValues.padding35}` : ""};
  }

  .aboutLinks {
    padding-right: ${PaddingValues.padding16};
  }

  a {
    color: ${Colors.avoLinkColors};
  }

  .linksFooter {
    margin-bottom: ${PaddingValues.padding12};
  }

  .socialMedia {
    display: flex;
    font-size: 1.1em;
  }

  .icons {
    margin-right: ${PaddingValues.padding12};
  }
`;
