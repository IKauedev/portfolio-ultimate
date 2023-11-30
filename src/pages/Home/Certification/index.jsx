import { certifications } from '../../../data/constants';
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
                    <CertificationCard certification={certification} />
                ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}