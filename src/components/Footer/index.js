import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Gift'EM</FooterLinkTitle>

                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Our Partners</FooterLink>
                <FooterLink to="/">Terms of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>More</FooterLinkTitle>

                <FooterLink to="/">Submit Suggestions</FooterLink>
                <FooterLink to="/">
                  Subscribe to our NewsLetter
                </FooterLink>
                <FooterLink to="/">Fidelity bonus</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>

            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>

                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Support</FooterLink>

                <FooterLink to="/">Sponsorships</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Special Offers</FooterLinkTitle>

                <FooterLink to="/">Clothes</FooterLink>
                <FooterLink to="/">Shoes</FooterLink>
                <FooterLink to="/">Bags</FooterLink>
                <FooterLink to="/">Electronics</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Gift'EM
              </SocialLogo>
              <WebsiteRights>
                Gift'EM &copy; {new Date().getFullYear()} All right reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href="/" target="blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
