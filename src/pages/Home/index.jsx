import { useState } from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/index.jsx";
import { Body } from "../../layout/defaultLayout/components/index.js";
import { Certification } from "./Certification/index.jsx";
import { Contact } from "./Contact/index.jsx";
import { Education } from "./Education/index.jsx";
import { Experience } from "./Experience/index.jsx";
import { HeroSection } from "./HeroSection/index.jsx";
import { ProjectDetails } from "./ProjectDetails/index.jsx";
import { Projects } from "./Projects/index.jsx";
import { Skills } from "./Skills/index.jsx";

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

export function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <HeroSection />
      <Wrapper>
        <Skills />
        <Experience />
      </Wrapper>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Wrapper>
        <Education />
        <Certification />
        <Contact />
      </Wrapper>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
  );
}
