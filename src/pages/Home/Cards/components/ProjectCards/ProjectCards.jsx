import PropTypes from 'prop-types';
import {
  Avatar,
  Button,
  Card,
  Date,
  Description,
  Details,
  Image,
  Members,
  Tag,
  Tags,
  Title,
} from './components';

ProjectCards.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    member: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  setOpenModal: PropTypes.func.isRequired,
};

export function ProjectCards({ project, setOpenModal }) {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} alt={project.title} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} alt="Membro" />
        ))}
      </Members>
      <Button>Clique Aqui</Button>
    </Card>
  );
}