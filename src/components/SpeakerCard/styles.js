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

export const StyledDescription = styled.div`
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

export const StyledCollapseText = styled.h4`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* Light Grey */

    color: #afafaf;
  }
`;

export const StyledContainer = styled(Container)`
  &&& {
    text-align: left;
    width: 574px;
    transform: translateX(-20px);
    @media (max-width: 1040px) {
      margin-left: 2rem;
      width: 100%;
    }
  }
`;
export const StyledImg = styled.img`
  &&& {
    width: 362px;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 181px;

    @media (max-width: 509px) {
      margin-left: 2rem;
      width: 100%;
    }
  }
`;
