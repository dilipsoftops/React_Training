import { Box, Button, Container, Typography } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import React, { Component } from "react";
import { CarouselData } from "./CarouselData";

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    };
  }

  nextSlide = () => {
    let newSlide = this.state.currentSlide === CarouselData.length - 1 ? 0 : this.state.currentSlide + 1;
    this.setState({ currentSlide: newSlide });
  };

  prevSlide = () => {
    let newSlide = this.state.currentSlide === 0 ? CarouselData.length - 1 : this.state.currentSlide - 1;
    this.setState({ currentSlide: newSlide });
  };

  render() {
    return (
      <Container>
        <Box display="flex" width="100%" justifyContent="space-between" overflow="hidden" position="relative">
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            gridGap="5px"
            justifyContent="space-around"
            flexWrap="wrap"
            style={{
              transition: "transform 0.5 ease-in-out",
            }}
          >
            <Box display="flex" flexDirection="column" justifyContent="space-around">
              <Typography variant="h4">{CarouselData[this.state.currentSlide].heading}</Typography>
              <br />
              <Typography variant="p">{CarouselData[this.state.currentSlide].description}</Typography>
              <Box marginTop="15px">
                <Button variant="contained">{CarouselData[this.state.currentSlide].buttonText}</Button>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <Button onClick={this.prevSlide}>
                <ArrowBackIcon />
              </Button>
              <Typography>
                {this.state.currentSlide + 1}/{CarouselData.length}
              </Typography>
              <Button onClick={this.nextSlide}>
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
          <Box display="flex">
            <img src={CarouselData[this.state.currentSlide].image_url} alt="" height="400" />
          </Box>
        </Box>
      </Container>
    );
  }
}
