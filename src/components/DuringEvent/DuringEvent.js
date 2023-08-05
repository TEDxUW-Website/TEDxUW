import React from "react";
import {
  StyledMissionTitle,
  StyledStatement,
  StyledRegistrationNotice,
  StyledButtonText,
  StyledButton,
  StyledContainer,
  StyledImg,
  StyledContainer2,
  StyledStatement2,
} from "./styles";
import { Container, Button, Divider } from "semantic-ui-react";
import tedxuw_logo_2022 from "../../res/images/tedxuw_logo_2022.png";

import LandingPageComponent from "../LandingPageComponent/LandingPageComponent";
import "./DuringEvent.css";

class DuringEvent extends React.Component {
  render() {
    return (
      <div>
        {/* normal size */}
        <StyledContainer>
          <div class="ui grid">
            <div class="column" className="text_col">
              <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
              <StyledStatement style={{ transform: "translateY(-60px)" }}>
                Looking into the future.
              </StyledStatement>
              <StyledRegistrationNotice
                style={{ transform: "translateY(-70px)" }}>
                Registration Now Open!
              </StyledRegistrationNotice>
              <a
                href="https://www.google.com"
                style={{ textDecoration: "none" }}>
                <StyledButton style={{ transform: "translateY(-65px)" }}>
                  <Divider hidden style={{ height: "150px" }} />
                  <StyledButtonText>Register Now</StyledButtonText>
                </StyledButton>
              </a>
            </div>
            <div
              class="column"
              style={{
                width: "536.08px",
                marginLeft: "35px",
                textAlign: "right",
              }}>
              <StyledImg src={tedxuw_logo_2022} />
            </div>
          </div>
        </StyledContainer>

        {/* small size */}
        <StyledContainer2>
          <StyledMissionTitle>2020 Vision.</StyledMissionTitle>
          <StyledStatement2>Looking into the future.</StyledStatement2>
          <StyledRegistrationNotice>
            Registration Now Open!
          </StyledRegistrationNotice>
          <a href="https://www.google.com" style={{ textDecoration: "none" }}>
            <StyledButton>
              <Divider hidden style={{ height: "150px" }} />
              <StyledButtonText>Register Now</StyledButtonText>
            </StyledButton>
          </a>
        </StyledContainer2>
        {/* landing page component */}
        <LandingPageComponent />
      </div>
    );
  }
}
export default DuringEvent;
