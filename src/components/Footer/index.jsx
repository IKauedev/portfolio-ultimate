import { LogoDev } from "@mui/icons-material";
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
        <Logo>IKaue.dev</Logo>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.linkedin} target="display">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.dev} target="display">
            <LogoDev />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Kauê Matos. Todos os direitos reservados.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}
