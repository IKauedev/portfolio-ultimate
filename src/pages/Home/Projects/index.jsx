import React, { useState } from "react";
import { projects } from "../../../data/project.js";
import { ProjectCards } from "../Cards/components/ProjectCards/ProjectCards.jsx";
import {
  Button,
  CardContainer,
  Container,
  Desc,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from "./components/ProjectsStyle.js";

export function Projects({ openModal, setOpenModal }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleFilterChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((prevCategory) => prevCategory !== category);
      }
      
      return [...prevCategories, category];
    });

    setShowAllProjects(false);
  };

  const visibleProjects = showAllProjects
    ? projects
    : projects
        .filter((project) => selectedCategories.length === 0 || selectedCategories.includes(project.category))
        .slice(0, 5);

  const handleShowMoreClick = () => {
    setShowAllProjects(true);
  };

  const isCategorySelected = (category) => selectedCategories.includes(category);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projetos</Title>
        <Desc>
          Venha conhecer os meus projetos desenvolvidos ao longo desse tempo de
          estudos.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            value="all"
            onClick={() => handleFilterChange("all")}
            active={selectedCategories.length === 0}
          >
            Todos
          </ToggleButton>
          <ToggleButton
            value="backend"
            onClick={() => handleFilterChange("backend")}
            active={isCategorySelected("backend")}
          >
            Back-end
          </ToggleButton>
          <ToggleButton
            value="frontend"
            onClick={() => handleFilterChange("frontend")}
            active={isCategorySelected("frontend")}
          >
            Front-end
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {visibleProjects.map((project) => (
            <ProjectCards
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
        {projects.length > 5 && !showAllProjects && (
          <Button onClick={handleShowMoreClick}>Mostrar Mais</Button>
        )}
      </Wrapper>
    </Container>
  );
}
