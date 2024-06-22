import { useState } from "react";
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
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleFilterChange = (category) => {
    setSelectedCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter(
          (prevCategory) => prevCategory !== category
        );
      }
      return [...prevCategories, category];
    });

    setVisibleCount(5);
    setShowAllProjects(false);
  };

  const handleShowMoreClick = () => {
    setVisibleCount((prevCount) => prevCount + 5);
    if (visibleCount + 5 >= projects.length) {
      setShowAllProjects(true);
    }
  };

  const handleShowLessClick = () => {
    setVisibleCount(5);
    setShowAllProjects(false);
  };

  const isCategorySelected = (category) =>
    selectedCategories.includes(category);
  const visibleProjects = projects
    .filter(
      (project) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(project.category)
    )
    .slice(0, visibleCount);

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
        {!showAllProjects && (
          <Button onClick={handleShowMoreClick}>Mostrar Mais</Button>
        )}
        {visibleCount > 5 && (
          <Button onClick={handleShowLessClick}>Mostrar Menos</Button>
        )}
      </Wrapper>
    </Container>
  );
}
