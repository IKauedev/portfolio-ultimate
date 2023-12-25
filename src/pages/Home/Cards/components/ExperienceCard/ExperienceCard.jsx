import React from "react";
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
        <Image src={experience.img} />
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
          <br/>
            <Skills>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skills>• {skill}</Skills>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
}
