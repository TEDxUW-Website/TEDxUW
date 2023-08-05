import styled from "styled-components";
import { Container, Button, Divider } from "semantic-ui-react";

export const StyledCollageContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 745px;
    position: relative;
    textalign: left;
    @media (max-width: 745px) {
      width: 100%;
      margin-top: 0px;
      padding-top: 0px;
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
export const FeaturedSpeakersText = styled.p`
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
export const StyledSpeakerContainer = styled(Container)`
  &&& {
    width: 1040px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 900px) {
      width: 90%;
    }
  }
`;
