import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { education } from "../../../data/education.js";
import { experiences } from "../../../data/experiences.js";
import { EducationCard } from "../Cards/components/EducationCard/EducationCard.jsx";
import { Container, Desc, TimelineSection, Title, Wrapper } from "./components/index.js";

export function Education() {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Formação Acadêmica</Title>
        <Desc>
        Minha educação tem sido uma jornada de autodescoberta e crescimento. Meu
        os detalhes educacionais são os seguintes.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem >
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
}
