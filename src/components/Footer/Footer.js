import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import youtube from "../../res/images/youtube.svg";
import FooterLogo from "../../res/images/FooterLogo.svg";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";

// import "../../grid.min.css";

import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div class="footercontainer">
            <div class="row">
              <div class="column column-1">
                <div class="stump-box">
                  <div class="footer-row">
                    <img src={tedxuw_2023} />
                  </div>
                  <div class="footer-row">
                    <img src={FooterLogo} />
                  </div>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Past Websites</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <a
                        href="https://tedxuw2.godaddysites.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        2020 Vision
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://2018.tedxuw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Making Waves 2018
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://2017.tedxuw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Defying Conventions 2017
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://2016.tedxuw.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        TEDxUW 2016
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Contact Us</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <a href="mailto:outreach@tedxuw.com">
                        outreach@tedxuw.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Social</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <div class="social-links">
                        <a
                          href="https://www.facebook.com/TEDxUW/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="social-icon"
                        >
                          <img src={facebook} />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/tedxuw/mycompany/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="social-icon"
                        >
                          <img src={linkedin} />
                        </a>
                        <a
                          href="https://www.instagram.com/tedxuw/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="social-icon"
                        >
                          <img src={instagram} />
                        </a>
                        <a
                          href="https://twitter.com/tedxuw"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="social-icon"
                        >
                          <img src={twitter} />
                        </a>
                        {/* <a href="#" class="social-icon">
                          <img src={youtube} />
                        </a> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row row-2">
              <div class="gray-line"> </div>
              <em>
                Copyright © 2023 TEDxUW - All Rights Reserved. <br />
                This independent TEDx event is operated under license from TED.
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
