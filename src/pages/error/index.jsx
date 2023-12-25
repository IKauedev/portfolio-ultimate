import { Link } from "react-router-dom";
import { Button, Container, NotFouldText, Title } from "./components";

export function NotFound() {
  return (
    <Container>
      <NotFouldText>404</NotFouldText>
      <Title>Página Indisponível</Title>
      <Button>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Voltar Para Página Principal
        </Link>
      </Button>
    </Container>
  );
}
