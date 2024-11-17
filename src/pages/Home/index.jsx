import { useState } from 'react';
import styled from 'styled-components';
import { Body } from '../_layout/defaultLayout/index.js';
import { Certification } from './Certification/index.jsx';
import { Contact } from './Contact/index.jsx';
import { Education } from './Education/index.jsx';
import { Experience } from './Experience/index.jsx';
import { HeroSection } from './HeroSection/index.jsx';
import { ProjectDetails } from './ProjectDetails/index.jsx';
import { Projects } from './Projects/index.jsx';
import { Skills } from './Skills/index.jsx';

const Wrapper = styled.div`
  background: #fff;
`;

export function Home() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <HeroSection />
      <Skills />
      <Experience />
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Education />
      <Certification />
      <Wrapper>
        <Contact />
      </Wrapper>
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
  );
}
