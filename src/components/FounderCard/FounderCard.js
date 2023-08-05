import React, { useEffect, useState, Component } from "react";
import {
  StyledName,
  StyledPosition,
  StyledDescription,
  StyledFounderCardContainer,
  StyledImg,
} from "./styles";
import { Container, ImageGroup } from "semantic-ui-react";
import linkedin from "../../res/images/linkedin.svg";
import "./FounderCard.css";

class FounderCard extends React.Component {
  render() {
    return (
      <div class="ui grid">
        <div
          class="row"
          style={{
            alignItems: "center",
          }}>
          <div class="column" className="founder_img_col">
            <StyledImg src={this.props.img} />
          </div>
          <div class="column" className="founder_desc_col">
            <StyledFounderCardContainer>
              <StyledName>{this.props.name}</StyledName>
              <StyledPosition>
                {this.props.position}
                <a
                  href={this.props.linkedin}
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    style={{ width: "24px", transform: "translate(14px, 4px)" }}
                    alt=""
                    src={linkedin}
                    onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                  />
                </a>
              </StyledPosition>
              <StyledDescription>{this.props.description}</StyledDescription>
            </StyledFounderCardContainer>
          </div>
        </div>
      </div>
    );
  }
}
export default FounderCard;
