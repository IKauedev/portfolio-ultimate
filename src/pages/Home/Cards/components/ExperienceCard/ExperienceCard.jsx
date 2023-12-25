import React from 'react';
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
} from '.';

export function ExperienceCard({ experience }) {
  return (
    <Card>
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <ExperienceDate>{experience.date}</ExperienceDate> {/* Utilizando ExperienceDate em vez de Date */}
        </Body>
      </Top>
      <Description>
        {experience?.desc && <Span>{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skills:</b>
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
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <Document src={experience.doc} />
        </a>
      )}
    </Card>
  );
}
