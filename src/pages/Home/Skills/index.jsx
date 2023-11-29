import { skills } from "../../../data/constants";
import {
    Container,
    Desc,
    Skill,
    SkillImage,
    SkillItem,
    SkillList,
    SkillTitle,
    SkillsContainer,
    Title,
    Wrapper
} from "./components";

export function Skills() {
    return (
      <Container id="skills">
        <Wrapper>
          <Title>Skills</Title>
          <Desc>Aqui estão algumas das minhas habilidades nas quais tenho trabalhado nos últimos 2 anos.
          </Desc>
          <SkillsContainer>
            {skills.map((skill) => (
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item) => (
                    <SkillItem>
                      <SkillImage src={item.image}/>
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            ))}
          </SkillsContainer>
        </Wrapper>
      </Container>
    )
  }