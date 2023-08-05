import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";

export const StyledTextContainer = styled(Container)`
  &&& {
    width: 745px;
    left: 347px;
    height: 220px;
    top: 852px;
  }
`;

export const StyledMissionTitle = styled.h1`
  &&& {
    color: #fcfcfc;
    font-family: Futura;
    font-size: 150px;
    font-style: normal;
    font-weight: 700;
    line-height: 199px;
    letter-spacing: 0em;
    text-align: left;
    text-shadow: 4px 4px 25px rgba(249, 214, 103, 0.5);
    margin-bottom: 32px;
    margin-top: 48px;
  }
`;

export const StyledStatement = styled.p`
  &&& {
    color: #fcfcfc;
    font-family: Avenir;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
    @media (max-width: 1040px) {
      font-size: 20px;
      line-height: 30px;
    }
    @media (max-width: 700px) {
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

export const StyledTitle = styled.h2`
  &&& {
    color: white;
    font-family: Futura;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 43px;
    letter-spacing: 0em;
    text-align: left;

    text-underline-offset: 15px;
    padding-bottom: 2.5rem;
    @media (min-width: 745px) {
      transform: translateX(-20px);
    }
  }
`;

export const StyledDescription = styled.p`
  &&& {
    color: #afafaf;
    font-family: Avenir;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }
`;

export const StyledText = styled.h4`
  &&& {
    /* Heading 1 */

    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const StyledGrid = styled(Grid)`
  &&& {
    margin-top: 16px;
    margin-bottom: 0;
    @media only screen and (max-width: 425px) {
      margin-top: 8px;
    }
  }
`;

export const StyledGridColumn = styled(GridColumn)`
  &&& {
    padding-right: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin-bottom: 16px !important;
    &:nth-last-child(-n + 6) {
      margin-bottom: 0 !important;
    }
    @media only screen and (max-width: 425px) {
      &:nth-last-child(n + 3) {
        margin-bottom: 4px !important;
      }
      &:nth-last-child(-n + 2) {
        margin-bottom: 0 !important;
      }
    }
  }
`;

export const StyledSocialContainer = styled(Container)`
  &&& {
    margin-top: 32px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 420px;
    position: relative;
    text-align: left;
    // background: red;

    @media (max-width: 420px) {
      width: 90%;
      margin-bottom: 20px;
    }
  }
`;

export const StyledButtonText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 21px;

    color: #fcfcfc;
  }
`;

export const StyledLandingContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 745px;
    position: relative;
    text-align: left;
    // background: purple;
    @media (max-width: 745px) {
      width: 90%;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

export const StyledLandingContainer2 = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    text-align: left;
    transform: translate(50px, -10px);
    align-items: center;
    // background: green;

    @media (max-width: 1040px) {
      width: 80%;
    }
    @media (max-width: 600px) {
      width: 65%;
      // background: blue;
    }
  }
`;

export const StyledImg = styled.img`
  &&& {
    width: 332px;
    height: 221.72px;
    @media (max-width: 1040px) {
      max-width: 100%;
      height: auto;
      margin: 0px;
      padding: 0px;
    }
  }
`;

export const StyledBackgroundImgDiv = styled.div`
  &&& {
    width: 100%;
    height: 324.41px;
    margin-bottom: 100px;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 1040px) {
      width: 90%;
      height: auto;
      margin-bottom: none;
    }
  }
`;

export const StyledSocial = styled.img`
  &&& {
    width: 57px;

    @media (max-width: 526px) {
      width: 30px;
    }
  }
`;
