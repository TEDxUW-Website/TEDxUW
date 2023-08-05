import React from "react";
import {
  StyledMissionTitle,
  StyledStatement,
  StyledNotice,
  StyledButtonText,
  StyledButton,
  StyledButtonWhite,
  StyledContainer,
  StyledButtonDiv,
  StyledButtonContainer,
} from "./styles";
import { Container, Button, Divider } from "semantic-ui-react";
import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";

class AfterEvent extends React.Component {
  render() {
    return (
      <div>
        <StyledContainer>
          <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
          <StyledStatement>
            Our event is now over. See you next year!
          </StyledStatement>
          <StyledNotice style={{ transform: "translateY(-105px)" }}>
            Feel free to checkout our speakers on Youtube!
          </StyledNotice>
          <StyledButtonDiv>
            <span>
              <a
                href="https://www.google.com"
                style={{ textDecoration: "none", paddingRight: "24px" }}>
                <StyledButtonWhite style={{ transform: "translateY(-65px)" }}>
                  <StyledButtonText>
                    Sign Up for our Newsletter
                  </StyledButtonText>
                </StyledButtonWhite>
              </a>

              <a
                href="https://www.google.com"
                style={{ textDecoration: "none" }}>
                <StyledButton style={{ transform: "translateY(-65px)" }}>
                  <StyledButtonText>Watch Videos on Youtube</StyledButtonText>
                </StyledButton>
              </a>
            </span>
          </StyledButtonDiv>
          <StyledButtonContainer>
            <div style={{ paddingBottom: "1rem" }}>
              <a
                href="https://www.google.com"
                style={{ textDecoration: "none" }}>
                <StyledButtonWhite>
                  <StyledButtonText>
                    Sign Up for our Newsletter
                  </StyledButtonText>
                </StyledButtonWhite>
              </a>
            </div>
            <div>
              <a
                href="https://www.google.com"
                style={{ textDecoration: "none" }}>
                <StyledButton>
                  <StyledButtonText>Watch Videos on Youtube</StyledButtonText>
                </StyledButton>
              </a>
            </div>
          </StyledButtonContainer>
        </StyledContainer>
        <LandingPageComponent />
      </div>
    );
  }
}

export default AfterEvent;
