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
import { createTheme, ThemeProvider } from "@mui/material";

export function Education() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
      },
      secondary: {
        main: "#febe0b",
      },
    },
  });

  return (
    <Container id="education">
      <Wrapper>
        <Title>Formação Acadêmica</Title>
        <Desc>
        Minha educação tem sido uma jornada de autodescoberta e crescimento. Meu
        os detalhes educacionais são os seguintes.
        </Desc>
        <ThemeProvider theme={theme}>
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={index}>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot   
                      variant="outlined"
                      color="primary"
                      style={{ color: theme.palette.primary.main }} 
                  />
                  {index !== education.length && (
                    <TimelineConnector style={{ background: "#febe0b" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
        </ThemeProvider>
      </Wrapper>
    </Container>
  );
}
