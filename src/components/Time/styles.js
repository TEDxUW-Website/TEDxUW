import styled from "styled-components";
import { Container, Grid, GridColumn } from "semantic-ui-react";

export const StyledDigit = styled.div`
  &&& {
    background: #242424;
    box-shadow: 0px 6px 10px rgba(244, 213, 120, 0.05),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    width: 72px;
    height: 133px;
    display: flex;
    flex-direction: column;

    display: flex;
    align-items: center;
    // @media (max-width: 1040px) {
    //   width: 50px;
    //   height: 92px;
    // }
  }
`;

export const StyledTimeUnit = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 85px;
    /* identical to box height */
    color: #fcfcfc;
    transform: translateY(-50%);
  }
`;

export const StyledCaption = styled.h1`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
    /* identical to box height */

    color: #fcfcfc;
  }
`;

export const StyledArticle = styled.article`
  &&& {
    padding-right: 131px;
    @media (max-width: 1040px) {
      padding-right: calc((100vw - 640px) / 3);
    }
    @media (max-width: 800px) {
      // background: red;
    }
  }
`;

export const StyledContainer = styled(Container)`
  &&& {
    margin-top: 127px;
    color: white;
    text-align: center;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const StyledHeaderDescription = styled.h3`
  &&& {
    font-family: Futura;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 42px;
    /* identical to box height */

    /* Dark White */
    // width: 90%;
    margin-left: 2rem;
    margin-right: 2rem;
    color: #e0e0e0;
    margin-top: 0px;

    @media (max-width: 400px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    @media (min-width: 700px) {
      display: none;
    }
  }
`;
