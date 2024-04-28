import { Link } from "react-router-dom";
import {
  Body,
  Card,
  Company,
  Description,
  Document,
  ExperienceDate,
  Image,
  ItemWrapper,
  Role,
  Skills,
  Span,
  Top,
} from ".";

export function ExperienceCard({ experience }) {
  return (
    <Card>
      <Top>
        <Image src={experience.img} alt="Experience" />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <ExperienceDate>{experience.date}</ExperienceDate>
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <h5>Habilidades Adiquiridas: </h5>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skills key={index}>• {skill}</Skills>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <Link to={experience.doc} target="_blank">
          <Document src={experience.doc} alt="Document" />
        </Link>
      )}
    </Card>
  );
}
