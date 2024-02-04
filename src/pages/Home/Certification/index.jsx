import { useState } from "react";
import { certifications } from "../../../data/certifications.js";
import { CertificationCard } from "./components/certificationCard/index.jsx";
import { Button, CardContainer, Container, Desc, Title, Wrapper } from "./components/index.js";

export function Certification() {
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll
    ? certifications
    : certifications.slice(0, 5);

  return (
    <Container>
      <Wrapper>
        <Title>Certificados</Title>
        <Desc>
          Algumas Certificações tiradas ao longo dessa trajetória de estudos!
        </Desc>
        <CardContainer>
          {visibleCertifications.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
            />
          ))}
        </CardContainer>
        {certifications.length > 5 && !showAll && (
          <Button onClick={() => setShowAll(true)}>Mostrar Mais</Button>
        )}
      </Wrapper>
    </Container>
  );
}
