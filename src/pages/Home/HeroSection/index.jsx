import { MdDownload } from "react-icons/md";
import Typewriter from "typewriter-effect";
import profile from "../../../assets/images/profile.jpg";
import { Bio } from "../../../data/bio.js";
import HeroBgAnimation from "../HeroBgAnimation/index.jsx";

import {
  HeroBg,
  HeroContainer,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ResumeButton,
  Span,
  SubTitle,
  TextLoop,
  Title,
} from "./components/index.js";

export function HeroSection() {
  function handleDownload()  {
    const link = document.createElement("a");
    link.href = "Curriculo.pdf";
    link.download = "Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Seja Bem vindo, Prazer me chamo {Bio.name}
            </Title>
            <TextLoop>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display" onClick={handleDownload}>
              Curriculo! <MdDownload />
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img src={profile} alt="hero-image" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
}
