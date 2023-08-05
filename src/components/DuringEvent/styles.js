import React from "react";
import styled from "styled-components";
import { Container, Button, Divider } from "semantic-ui-react";

export const StyledMissionTitle = styled.h1`
  &&& {
    -webkit-text-stroke: 2px #f9d667; /* width and color */

    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 100px;
    line-height: 133px;

    color: #fcfcfc;

    text-shadow: 4px 4px 25px rgba(249, 214, 103, 0.5);

    @media (max-width: 580px) {
      font-size: 20vw;
      line-height: 30vw;
    }
    @media (max-width: 700px) {
      margin-top: 0px;
      padding-left: 1rem;
    }
    @media (max-width: 250px) {
      padding-left: 0rem;
    }
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

    @media (max-width: 745px) {
      font-size: 25px;
      line-height: 30px;
    }
    @media (max-width: 350px) {
      font-size: 20px;
      line-height: 25px;
    }
    @media (max-width: 300px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const StyledStatement2 = styled.p`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height */
    color: #ffffff;
    @media (max-width: 745px) {
      font-size: 25px;
      line-height: 30px;
    }
    @media (max-width: 350px) {
      font-size: 20px;
      line-height: 25px;
    }
    @media (max-width: 300px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
`;

export const StyledRegistrationNotice = styled.p`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 33px;
    /* identical to box height */

    /* Red */

    color: #e62b1e;

    @media (max-width: 745px) {
      font-size: 20px;
      line-height: 25px;
    }
    @media (max-width: 350px) {
      font-size: 16px;
      line-height: 15px;
    }
    @media (max-width: 300px) {
      font-size: 12px;
      line-height: 15px;
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

    color: #f5f2f2;
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    display: inline-flex;
    align-items: center;
    background: #e62b1e;
    border-radius: 100px;

    color: #fcfcfc;
    width: 162px;
    height: 53px;
    text-align: center;
    justify-content: center;
    border: none;

    width: 162px;
    height: 53px;
    @media (max-width: 162px) {
      width: 100%;
      height: auto;
      padding-bottom: 0px;
      margin-bottom: 0px;
    }
    @media (max-width: 1040px) {
      transform: translateY(1.5rem);
    }
  }
`;

export const StyledContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    text-align: left;
    padding-top: 80px;
    @media (max-width: 1040px) {
      display: none;
    }
  }
`;
export const StyledContainer2 = styled(Container)`
  &&& {
    @media (min-width: 1040px) {
      display: none;
    }

    @media (max-width: 1040px) {
      color: white;
      position: relative;
      text-align: left;
      padding-top: 80px;
      padding-left: 1rem;
    }
    @media (max-width: 250px) {
      padding-left: 0rem;
    }
  }
`;
export const StyledImg = styled.img`
  &&& {
    height: 536.08px;
    width: 492px;
  }
`;
