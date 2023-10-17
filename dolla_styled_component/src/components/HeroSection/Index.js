import React, { Component } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElement";
import video from "../../videos/video.mp4";

export default class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onHover = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg src={video} autoPlay loop muted type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>Sign up for a new account today and receive $250 in credit towards your next payment.</HeroP>
          <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={this.onHover} onMouseLeave={this.onHover}>
              Get started {this.state.hover ? <ArrowForward /> : <ArrowRight />}{" "}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
  }
}
