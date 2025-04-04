import { skills } from '../../../data/skills';
import {
  Container,
  Desc,
  Skill,
  SkillItem,
  SkillList,
  SkillTitle,
  SkillsContainer,
  Title,
  Wrapper,
} from './components';

export function Skills() {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Aqui estão algumas das minhas habilidades nas quais tenho trabalhado
          nos últimos 5 anos.
        </Desc>
        <SkillsContainer>
          {skills.map((category) => (
            <Skill key={category.title}>
              <SkillTitle>{category.title}</SkillTitle>
              <SkillList>
                {category.skills.map((item) => {
                  const IconComponent = item.icon;

                  return (
                    <SkillItem key={item.name}>
                      <IconComponent
                        style={{
                          fontSize: '2rem',
                          marginRight: '8px',
                          color: 'rgb(0, 159, 227)',
                        }}
                      />
                      {item.name}
                    </SkillItem>
                  );
                })}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}
