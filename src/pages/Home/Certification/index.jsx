import { certifications } from '../../../data/certifications.js';
import { CardContainer, Container, Desc, Title, Wrapper } from "./components";
import { CertificationCard } from "./components/certificationCard/index.jsx";

export function Certification() {
    return (
        <Container>
            <Wrapper>
                <Title>Certificados</Title>
                <Desc>
                    Algumas Certificações tiradas ao longo dessa tragetoria de estudos!
                </Desc>
                <CardContainer>
                {certifications
                    .map((certification) => (
                    <CertificationCard key={certification.id} certification={certification} />
                ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}