import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

import {
  ButtonContainer,
  GitHubButton,
  LinkedinButton,
  LogoImg,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from '.';

import Logo from '../../assets/images/favicon.png';
import { Bio } from '../../data/bio.js';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#009FE3',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <LogoImg src={Logo} alt="Logo" />
            <Span>IKauê</Span>
          </Link>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">Sobre Mim</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experiência</NavLink>
          <NavLink href="#projects">Projetos</NavLink>
          <NavLink href="#education">Formação Acadêmica</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Perfil GitHub
          </GitHubButton>
        </ButtonContainer>
        <ButtonContainer>
          <LinkedinButton href={Bio.linkedin} target="_blank">
            Perfil Linkedin
          </LinkedinButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>
              Sobre Mim
            </MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>
              Skills
            </MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>
              Experiência
            </MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>
              Projetos
            </MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>
              Formação Acadêmica
            </MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.github}
              target="_blank"
            >
              Perfil GitHub
            </GitHubButton>
            <LinkedinButton
              style={{
                padding: '10px 16px',
                background: `${theme.primary}`,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.linkedin}
              target="_blank"
            >
              Perfil Linkedin
            </LinkedinButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}
