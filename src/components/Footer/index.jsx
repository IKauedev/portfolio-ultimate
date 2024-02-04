import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  SocialMediaIcon,
  SocialMediaIcons,
} from ".";
import { Bio } from "../../data/bio.js";

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ikaue</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2023 Kauê Matos. Todos os direitos reservados.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
