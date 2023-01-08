import styled from "styled-components";
import { Colors } from "../../config/Colors";
import { FontType, PaddingValues } from "../../config/Values";

export const FlowbaseWrapper = styled.div`
  padding: ${({ isTablet, isMobile }) =>
    isMobile
      ? `${PaddingValues.padding50} ${PaddingValues.padding24}`
      : isTablet
      ? `${PaddingValues.padding50} ${PaddingValues.padding35}`
      : `${PaddingValues.padding50} ${PaddingValues.padding60}`};
  font-family: ${FontType.fontInter}, sans-serif;
  background-color: ${Colors.flowbaseBG};
`;

export const FlowbaseTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ isTablet, isMobile }) =>
    isMobile ? "center" : isTablet ? "" : "center"};
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  text-align: center;

  .logo {
    display: flex;
    align-items: center;
    margin-bottom: ${({ isTablet }) =>
      isTablet ? `${PaddingValues.padding35}` : ""};
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }

  .footerLogo {
    width: 164px;
  }

  .starImg {
    width: 12px;
    margin: ${({ isMobile }) =>
      isMobile
        ? `${PaddingValues.padding24} ${PaddingValues.padding16}`
        : `0px ${PaddingValues.padding16}`};
  }

  .premium {
    color: ${Colors.flowbaseTextBlue};
  }

  .socialMedia {
    display: flex;
    color: ${Colors.flowbaseTextGray};
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }

  .socialLinks {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .followUs {
    border-right: ${({ isMobile }) =>
      isMobile ? "" : `1px solid ${Colors.flowbaseTextGray}`};
    padding-right: ${({ isMobile }) =>
      isMobile ? "" : `${PaddingValues.padding16}`};
    margin-bottom: ${({ isMobile }) =>
      isMobile ? `${PaddingValues.padding24}` : ""};
  }

  .social {
    padding-left: ${({ isMobile }) =>
      isMobile ? "" : `${PaddingValues.padding16}`};
  }

  a {
    color: ${Colors.socialLinksGray};
    font-size: 1em;
    font-family: ${FontType.fontSatoshi}, sans-serif;

    &:hover {
      color: ${Colors.flowbaselinkPurple};
    }
  }
`;

export const FlowbaseLinksWrapper = styled.div`
  margin: ${PaddingValues.padding60} 0px ${PaddingValues.padding80};
  /* display: flex; */
  /* justify-content: space-between; */
  /* flex-wrap: wrap; */
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: ${({ isTablet, isMobile }) =>
    isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr 1fr" : "1fr 1fr 1fr 1fr"};
  grid-column-gap: ${({ isMobile }) =>
    isMobile ? `${PaddingValues.padding24}` : `${PaddingValues.padding35}`};
  grid-row-gap: ${PaddingValues.padding35};

  .head {
    font-size: 0.9em;
    color: ${Colors.flowbaseTextGray};
    margin: ${PaddingValues.padding24} 0px ${PaddingValues.padding16};
    font-weight: 700;
  }

  .headTop {
    font-size: 0.9em;
    color: ${Colors.flowbaseTextGray};
    margin-bottom: ${PaddingValues.padding16};
    font-weight: 700;
  }

  .imgLink {
    display: flex;
  }

  .links {
    padding: ${PaddingValues.padding8} 0px;
  }

  .linkText {
    margin-left: ${PaddingValues.padding8};
  }

  a {
    color: ${Colors.flowbaseTextBlue};
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: ${Colors.flowbaselinkPurple};
    }
  }
`;

export const FlowbaseBottomWrapper = styled.div`
  margin-top: ${PaddingValues.padding35};
  color: ${Colors.flowbaseTextGray};
  font-size: small;
  text-align: ${({ isTablet }) => (isTablet ? `center` : "")};
    font-family: ${FontType.fontSatoshi}, sans-serif;

  a {
    color: ${Colors.flowbaselinkPurple};
    text-decoration: none;
    font-weight: 500;
  }
`;
