import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

import {
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
} from ".";

import Logo from "../../assets/images/favicon.png";
import { Bio } from "../../data/bio.js";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [brightnessFilter, setBrightnessFilter] = useState("brightness(0)");
  const theme = useTheme();

  const applyBrightnessFilter = () => {
    const width = window.innerWidth;
    if (width <= 960) {
      return "brightness(1)";
    } else {
      return "brightness(0)";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setBrightnessFilter(applyBrightnessFilter());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: "50px",
                height: "50px",
                filter: brightnessFilter,
              }}
            />
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
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Perfil GitHub
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
}
