import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const StyledButtonText = styled.p`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #747474;
    padding-top: 16px;
  }
`;
export const StyledButton = styled.p`
  &&& {
    width: 162px;
    height: 53px;
    padding: 0px !important;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.49), rgba(0, 0, 0, 0.49)),
      #e62b1e;
    border-radius: 100px;
  }
`;
