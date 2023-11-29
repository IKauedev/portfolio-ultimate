import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import React, { useRef } from "react";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./components";

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contato</Title>
        <Desc>
          Sinta-se à vontade para entrar em contato comigo em caso de dúvidas ou
          oportunidades!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Envie um Email 🚀</ContactTitle>
          <ContactInput placeholder="Digite seu E-mail" name="from_email" />
          <ContactInput placeholder="Digite seu nome" name="from_name" />
          <ContactInput placeholder="Assunto" name="subject" />
          <ContactInputMessage placeholder="Mensagem" rows="4" name="message" />
          <ContactButton type="submit" value="Enviar" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
}
