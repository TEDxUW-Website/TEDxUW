import styled from "styled-components";
import { Container, Grid, GridColumn, Button, Form } from "semantic-ui-react";

export const StyledButton = styled(Button)`
  &&& {
    border: red;
    width: 103px;
    height: 37.5px;
    left: 455px;
    top: 164px;

    /* Red */
    vertical-align: top;
    background: #e62b1e;
    border-radius: 0px 3px 3px 0px;
    @media (max-width: 390px) {
      border-radius: 3px 3px 3px 3px;
      margin-top: 0.2rem;
    }
  }
`;

export const StyledText = styled(Button)`
  &&& {
    border: none;
    background: #e62b1e;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */

    /* White */

    color: #ffffff;
  }
`;

export const StyledInput = styled.input`
  &&& {
    caret-color: #afafaf;
    border: none;
    background: #e62b1e;
    font-family: Avenir;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    /* identical to box height */
    /* White */

    padding-left: 16px;
    color: #3c3c3c;
    background: #ffffff;
    border-radius: 3px 0px 0px 3px;
    width: 235px;
    height: 35px;
    @media (max-width: 390px) {
      width: 70%;
      border-radius: 3px 3px 3px 3px;
    }
  }
`;
