import styled from "styled-components";
import {
  Container,
  Grid,
  GridColumn,
  Button,
  Form,
  Divider,
} from "semantic-ui-react";

export const StyledRedHeader = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    // line-height: 32px;
    /* identical to box height */

    color: #ff1a0a;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`;

export const StyledMainHeader = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    // line-height: 85px;
    /* identical to box height */

    color: #ffffff;
    margin-top: 16px;
    margin-bottom: 0px;
  }
`;

export const StyledHeaderDescription = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    /* Dark White */

    color: #e0e0e0;
    margin-top: 32px;
  }
`;

export const StyledSmallHeader = styled.h4`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 43px;
    /* identical to box height */

    /* Dark White */

    color: #e0e0e0;
  }
`;

export const StyledSpeakerContainer = styled(Container)`
  &&& {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;

    text-align: left;
    @media (max-width: 1040px) {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;

export const StyledSpeakerContainer2 = styled(Container)`
  &&& {
    margin-top: 70px;
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    text-align: center;
    padding: 0px;
    @media (max-width: 1040px) {
      margin-top: 0px;
      width: 100%;
    }
  }
`;

export const StyledSpeakerContainer3 = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    color: white;
    width: 1040px;
    position: relative;
    text-align: center;
    padding: 0px;
    @media (max-width: 1040px) {
      width: 100%;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    height: 100px;
    @media (max-width: 1040px) {
      height: 2rem;
    }
  }
`;
