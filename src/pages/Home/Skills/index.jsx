import { skills } from "../../../data/skills";
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
  Wrapper,
} from "./components";

export function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Aqui estão algumas das minhas habilidades nas quais tenho trabalhado
          nos últimos 3 anos.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.id}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={skill.id}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}
