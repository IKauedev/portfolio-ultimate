import PropTypes from 'prop-types';
import { Card, Date, Description, Details, Image, Tag, Tags, Title } from '.';

CertificationCard.propTypes = {
  certification: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export function CertificationCard({ certification }) {
  return (
    <Card>
      <Image src={certification.image} alt={certification.title} />
      <Tags>
        {certification.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{certification.title}</Title>
        <Date>{certification.date}</Date>
        <Description>{certification.description}</Description>
      </Details>
    </Card>
  );
}

