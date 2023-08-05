import React from "react";
import styled from "styled-components";
import { Container, Button, Divider } from "semantic-ui-react";

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
export const StyledMissionTitle = styled.h1`
  &&& {
    -webkit-text-stroke: 2px #f9d667; /* width and color */
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
    // background: green;
    @media (max-width: 1040px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    @media (max-width: 580px) {
      font-size: 20vw;
      line-height: 30vw;
    }
    @media (max-width: 700px) {
      margin-top: 0px;
    }
  }
`;
export const StyledBeforeEventContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    // background: green;
    // text-align: left;
    // background: green;
    @media (max-width: 1040px) {
      width: 100%;
    }
  }
`;

export const StyledBeforeEventContainer2 = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 745px;
    position: relative;
    textalign: left;
    @media (max-width: 745px) {
      width: 100%;
    }
  }
`;

export const StyledImgDiv = styled.div`
  &&& {
    width: 100%;
    height: 299px;
    @media (max-width: 1040px) {
      max-width: 100%;
      height: auto;
    }
  }
`;

export const StyledDivider = styled.div`
  &&& {
    height: 150px;
    @media (max-width: 600px) {
      height: 70px;
    }
  }
`;

export const StyledButton = styled(Button)`
  &&& {
    display: inline-flex;
    align-items: center;
    background-color: #e62b1e;
    border-radius: 100px;
    color: #fcfcfc;
    width: 272px;
    height: 45px;
    text-align: center;
    justify-content: center;
    border: none;
    @media (max-width: 272px) {
      width: 100%;
      height: auto;
    }
  }
`;
