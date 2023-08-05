import styled from "styled-components";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";

export const StyledTitle = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 85px;
    /* identical to box height */
    padding-top: 355px;
    color: #ffffff;
    @media (max-width: 870px) {
      padding-top: 25vw;
    }
    @media (max-width: 550px) {
      padding-top: 65px;
    }
    @media (max-width: 335px) {
      padding-top: 55px;
    }
  }
`;

export const StyledDescription = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const StyledHeader = styled.h2`
  &&& {
    text-align: left;
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 43px;
    /* identical to box height */
    margin-bottom: 30px;
    color: #ffffff;
  }
`;

export const StyledAboutContainer = styled(Container)`
  &&& {
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    text-align: center;
    @media (max-width: 1040px) {
      width: 90%;
      // margin-left: 1rem;
      // margin-right: 1rem;
    }
  }
`;
export const StyledHeaderDiv = styled.div`
  &&& {
    width: 100%;
    height: 815px;
    right: 0px;
    @media (max-width: 870px) {
      height: 80vw;
      line-height: 90%;
    }
    @media (max-width: 550px) {
      height: 500px;
      line-height: 90%;
    }
    @media (max-width: 335px) {
      height: 700px;
      line-height: 90%;
    }
  }
`;
export const StyledExecContainer = styled(Container)`
  &&& {
    width: 1040px;
    margin-left: auto;
    margin-right: auto;
    // background: purple;
    @media (max-width: 900px) {
      width: 90%;
    }
  }
`;
