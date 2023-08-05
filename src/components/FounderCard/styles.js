import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const StyledName = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */
    /* Red */
    color: #e62b1e;
  }
`;

export const StyledPosition = styled.h4`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 27px;

    /* White */

    color: #ffffff;
  }
`;

export const StyledDescription = styled.h4`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;

    /* Light Grey */

    color: #afafaf;
  }
`;

export const StyledImg = styled.img`
  &&& {
    width: 235px;
    @media (max-width: 870px) {
      width: 90%;
    }
  }
`;

export const StyledFounderCardContainer = styled(Container)`
  &&& {
    text-align: left;
    width: 574px;
    @media (max-width: 870px) {
      width: 90%;
      padding-left: 1rem;
    }
  }
`;
