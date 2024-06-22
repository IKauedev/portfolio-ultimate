import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import { experiences } from "../../../data/experiences.js";
import { createTheme, ThemeProvider } from "@mui/material";
import { ExperienceCard } from "../Cards/components/ExperienceCard/ExperienceCard.jsx";

import {
  Container,
  Desc,
  TimelineSection,
  Title,
  Wrapper,
} from "./components/index.js";

export function Experience() {
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
    <Container id="experience">
      <Wrapper>
        <Title>Experiência</Title>
        <Desc>Minha experiência de trabalho como desenvolvedor.</Desc>
        <ThemeProvider theme={theme}>
          <TimelineSection>
            <Timeline>
              {experiences.map((experience, index) => (
                <TimelineItem key={experience.id}>
                  <TimelineSeparator>
                    <TimelineDot
                      variant="outlined"
                      color="primary"
                      style={{ color: theme.palette.primary.main }}
                    />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector style={{ background: "#febe0b" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </TimelineSection>
        </ThemeProvider>
      </Wrapper>
    </Container>
  );
}
