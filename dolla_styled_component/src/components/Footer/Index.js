import React, { Component } from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./FooterElements";

import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

export default class Footer extends Component {
  toggleHome = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinkWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle>
                <FooterLink to="/sigin">How it works</FooterLink>
                <FooterLink to="/sigin">Testinomial</FooterLink>
                <FooterLink to="/sigin">Careers</FooterLink>
                <FooterLink to="/sigin">Investors</FooterLink>
                <FooterLink to="/sigin">Terms of service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/sigin">Submit Video</FooterLink>
                <FooterLink to="/sigin">Ambassadors</FooterLink>
                <FooterLink to="/sigin">Agency</FooterLink>
                <FooterLink to="/sigin">Influencer</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact us</FooterLinkTitle>
                <FooterLink to="/sigin">Contact</FooterLink>
                <FooterLink to="/sigin">Support</FooterLink>
                <FooterLink to="/sigin">Destinomials</FooterLink>
                <FooterLink to="/sigin">Sponsorship</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/sigin">Instagram</FooterLink>
                <FooterLink to="/sigin">Facebook</FooterLink>
                <FooterLink to="/sigin">Youtube</FooterLink>
                <FooterLink to="/sigin">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={this.toggleHome}>
                dolla
              </SocialLogo>
              <WebsiteRights> dolla © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    );
  }
}
