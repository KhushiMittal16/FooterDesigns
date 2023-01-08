import styled from "styled-components";
import cladeBG from "../../assets/cladebg.svg";
import { Colors } from "../../config/Colors";
import { PaddingValues } from "../../config/Values";

export const CladeWrapper = styled.div`
  background-image: url(${cladeBG});
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  padding: ${({ isMobile }) =>
    isMobile
      ? `${PaddingValues.cladePdding385} ${PaddingValues.padding24}  ${PaddingValues.cladePadding200}`
      : `${PaddingValues.cladePdding385} ${PaddingValues.padding80}  ${PaddingValues.cladePadding200}`};

  .clade {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: ${PaddingValues.padding80};
  }

  .cladeLogo {
    display: flex;
    color: ${Colors.pinkClade};
    align-items: center;
    margin-bottom: ${PaddingValues.padding52};
  }

  .cladeDesign {
    font-weight: 700;
    font-size: 1.6em;
    padding-left: ${PaddingValues.padding12};
  }

  .pageLinks {
    color: ${Colors.white};
    padding-left: ${({ isMobile }) => (isMobile ? `${PaddingValues.padding24}` : `${PaddingValues.padding52}`)};
    border-left: 2px solid ${Colors.skyBlueClade};
    border-right: 2px solid ${Colors.skyBlueClade};
    padding-right:${PaddingValues.padding24};
  }

  .socialLinks {
    color: ${Colors.white};
    padding-left: ${({ isMobile }) => (isMobile ? `${PaddingValues.padding24}` : `${PaddingValues.padding52}`)};
  }

  a {
    color: ${Colors.white};
    text-decoration: none;
  }

  .contactBtn {
    border: 4px solid ${Colors.yellowClade};
    color: ${Colors.yellowClade};
    font-weight: 700;
    font-size: 1.35em;
    padding: 1em 1.5em 0.8em;
    text-align: center;
    width: ${({ isMobile }) => (isMobile ? `` : `40%`)};
    &:hover {
      background-color: ${Colors.yellowClade};
      color: ${Colors.blue};
    }
  }

  .pages {
    font-size: 1.3em;
    padding: 1.2rem 0px;
    font-weight: 600;
  }

  .social {
    font-size: 2.5rem;
    padding: ${PaddingValues.padding12};
  }
`;
