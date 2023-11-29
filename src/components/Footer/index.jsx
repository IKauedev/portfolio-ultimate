import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons
} from '.';
import { Bio } from '../../data/constants';

export function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Ikaue</Logo>
        <Nav>
          <NavLink href="#about">Sobre min</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Formação Acadêmica</NavLink>
        </Nav>
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
