/* eslint-disable react/prop-types */
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Modal } from "@mui/material";

import {
    Button,
    ButtonGroup,
    Container,
    Date,
    Desc,
    Image,
    Label,
    Member,
    MemberImage,
    MemberName,
    Members,
    Tag,
    Tags,
    Title,
    Wrapper,
} from "./components";

export function ProjectDetails({ openModal, setOpenModal }) {
  const project = openModal && openModal.project !== undefined ? openModal.project : null;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project?.member.map((member, index) => (
                  <Member key={index}>
                    <MemberImage src={member.img} />
                    <MemberName>{member.name}</MemberName>
                    <a
                      href={member.github}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <GitHub />
                    </a>
                    <a
                      href={member.linkedin}
                      target="new"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <LinkedIn />
                    </a>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button dull href={project?.github} target="new">
              Visualizar Código
            </Button>
            <Button href={project?.webapp} target="new">
              {project?.webapp ? "Visualizar Projeto" : "Link Indisponível"}
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
}
