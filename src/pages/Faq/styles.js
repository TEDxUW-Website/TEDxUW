import styled from "styled-components";
import { Divider, Container } from "semantic-ui-react";
export const StyledTitle = styled.h1`
  &&& {
    /* Title */

    font-family: Futura;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 64px;
    /* identical to box height */

    color: #ffffff;
    margin-bottom: 64px;
    @media (min-width: 768px) {
      width: 100%;
    }
    @media (max-width: 745px) {
      margin-bottom: 34px;
    }
  }
`;

export const StyledQuestion = styled.h1`
  &&& {
    /* Heading 2 */

    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    /* identical to box height */

    color: #ffffff;
  }
`;

export const StyledAnswer = styled.h1`
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

export const StyledDescription = styled.h1`
  &&& {
    font-family: Avenir;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    text-decoration: none;
    color: #ffffff;
  }
`;

export const StyledMoreQuestionsDiv = styled.div`
  &&& {
    background: black;
    color: white;
    padding-top: 20px;
    border-top: 1px solid #3c3c3c;
    height: 200px;
    width: 745px;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    @media (max-width: 745px) {
      width: 90%;
      padding: 1rem;
    }
  }
`;

export const StyledFAQContainer = styled(Container)`
  &&& {
    margin-left: auto;
    margin-right: auto;
    width: 745px;
    @media (max-width: 800px) {
      width: 90%;
      padding: 1rem;
    }
  }
`;

export const StyledDivider = styled(Divider)`
  &&& {
    height: 144px;
    @media (max-width: 745px) {
      height: 50px;
    }
  }
`;
