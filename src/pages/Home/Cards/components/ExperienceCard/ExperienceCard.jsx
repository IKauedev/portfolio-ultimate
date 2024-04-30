import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
  if (!experience || typeof experience !== 'object') {
    return null;
  }

  const { img, role, company, date, desc, skills, doc } = experience;

  return (
    <Card>
      <Top>
        <Image src={img} alt="Experience" />
        <Body>
          <Role>{role}</Role>
          <Company>{company}</Company>
          <ExperienceDate>{date}</ExperienceDate>
        </Body>
      </Top>
      <Description>
        {desc && <Span>{desc}</Span>}
        {skills && (
          <>
            <br />
            <Skills>
              <h5>Habilidades Adiquiridas: </h5>
              <ItemWrapper>
                {skills.map((skill, index) => (
                  <Skills key={index}>• {skill}</Skills>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
      {doc && (
        <Link to={doc} target="_blank">
          <Document src={doc} alt="Document" />
        </Link>
      )}
    </Card>
  );
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    img: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
    doc: PropTypes.string,
  }).isRequired,
};
