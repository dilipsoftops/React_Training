import React, { Component } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  ImgWrap,
  Img,
  SubTitle,
} from "./InfoElement";
import { Button } from "../ButtonElement";
export default class InfoSection extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      lightBg,
      id,
      imgStart,
      topLine,
      lightText,
      headline,
      darkText,
      description,
      buttonLabel,
      img,
      alt,
      primary,
      dark,
    } = this.props;

    return (
      <>
        <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                  <TopLine>{topLine}</TopLine>
                  <Heading lightText={lightText}>{headline}</Heading>
                  <SubTitle darkText={darkText}>{description}</SubTitle>
                  <BtnWrap>
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                </TextWrapper>
              </Column1>
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            </InfoRow>
          </InfoWrapper>
        </InfoContainer>
      </>
    );
  }
}
