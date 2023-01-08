import styled from "styled-components";
import { BorderRadius, FontType, PaddingValues } from "../../config/Values";
import { Colors } from "../../config/Colors";

export const GetastraWrapper = styled.div`
  font-family: ${FontType.fontSans};
`;

export const GetastraTopWrapper = styled.div`
  margin: ${({ isMobile }) =>
    isMobile
      ? `0px 0px ${PaddingValues.getAstraTop}`
      : `${PaddingValues.getAstraTop}`};
  background-color: ${Colors.getastaBg};
  padding: ${({ isMobile, isTablet }) =>
    isMobile
      ? `${PaddingValues.getastraTopPadding} ${PaddingValues.padding24}`
      : isTablet
      ? `${PaddingValues.padding24}`
      : `${PaddingValues.getastraTopPadding} ${PaddingValues.padding50}`};
  border-radius: ${({ isMobile }) =>
    isMobile ? "0px" : `${BorderRadius.smallRadius}`};
  color: ${Colors.white};
  display: flex;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
  justify-content: space-between;

  .about {
    padding-right: 3em;
    width: ${({ isMobile, isTablet }) =>
      isMobile ? "80%" : isTablet ? "50%" : "28%"};
    margin-bottom: ${({ isTablet }) =>
      isTablet ? `${PaddingValues.padding60}` : ""};
  }

  .pentestWebProtect {
    display: flex;
    justify-content: space-between;
    width: ${({ isTablet }) => (isTablet ? "85%" : "")};
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }
  .companyResources {
    display: flex;
    justify-content: space-between;
    width: ${({ isTablet }) => (isTablet ? "90%" : "")};
    flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  }

  .otherDetails {
    padding: 0px ${PaddingValues.padding12};
    width: ${({ isMobile }) => (isMobile ? "100%" : "40%")};
    margin-bottom: ${({ isTablet }) =>
      isTablet ? `${PaddingValues.getAstraTop}` : ""};
  }

  a {
    text-decoration: none;
    color: ${Colors.white};

    &:hover {
      color: ${Colors.lightBlue};
    }
  }

  .astraText {
    padding: ${PaddingValues.padding24} 0px;
    font-weight: 700;
    font-size: 0.9em;
  }

  .socialMedia {
    font-size: 1.8em;
    display: flex;
    justify-content: space-between;
    padding-right: ${({ isTablet }) => (isTablet ? "" : "2em")};
  }

  .seeReview {
    font-size: small;
    padding: ${PaddingValues.padding60} 0px ${PaddingValues.padding12};
    font-weight: 500;
  }

  .reviews {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: ${({ isTablet }) => (isTablet ? "" : "3em")};
  }

  .head {
    font-size: small;
    margin-bottom: ${PaddingValues.padding24};
  }

  .links {
    text-transform: initial;
    font-weight: 700;
    margin-bottom: ${PaddingValues.padding24};
  }
`;

export const GetastraBottomWrapper = styled.div`
  padding: ${({ isTablet }) =>
    isTablet ? "" : `0px ${PaddingValues.padding50}`};
  display: flex;
  justify-content: space-between;
  align-items: ${({ isTablet }) => (isTablet ? "center" : "flex-start")};
  color: ${Colors.astraFooterBlack};
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};

  .made {
    display: flex;
    font-weight: bold;
    align-items: center;
    margin-bottom: ${({ isTablet }) =>
      isTablet ? `${PaddingValues.padding12}` : ""};
  }

  .countries {
    display: flex;
  }

  .countryImg {
    padding-left: ${PaddingValues.padding12};
  }

  .copyright {
    padding: ${PaddingValues.padding5};
    text-align: center;
    margin-bottom: ${({ isTablet }) =>
      isTablet ? `${PaddingValues.padding12}` : ""};
  }

  .astraIt {
    padding: 0px ${PaddingValues.padding5};
    font-weight: 700;
  }

  .linksPrivacy {
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    align-items: center;
    text-align: center;
  }

  .privacy {
    padding: 0px ${PaddingValues.padding5};
  }

  .terms {
    padding: 0px ${PaddingValues.padding5};
    border-left: 1px solid ${Colors.astraFooterBlack};
    border-right: 1px solid ${Colors.astraFooterBlack};
  }

  a {
    text-decoration: none;
    color: ${Colors.astraGray};
    &:hover {
      color: ${Colors.astraFooterBlack};
    }
  }
`;
