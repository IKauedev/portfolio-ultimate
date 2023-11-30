import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import React, { useRef } from "react";
import { EMAIL_TEMPLATE_SERVICE, EMAIL_TOKEN, EMAIL_TOKEN_SERVICE } from "../../../constants/BASE_API_EMAIL";
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
  const [emailError, setEmailError] = React.useState(false);
  const [nameError, setNameError] = React.useState(false);
  const [subjectError, setSubjectError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          EMAIL_TOKEN_SERVICE,
          EMAIL_TEMPLATE_SERVICE,
          form.current,
          EMAIL_TOKEN
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
    }
  };

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
  }

  function validateSubject(subject) {
    const subjectRegex = /\S+/;
    return subjectRegex.test(subject);
  }

  function validateForm() {
    let isValid = true;

    if (!validateEmail(form.current.from_email.value)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (!validateName(form.current.from_name.value)) {
      setNameError(true);
      isValid = false;
    } else {
      setNameError(false);
    }

    if (!validateSubject(form.current.subject.value)) {
      setSubjectError(true);
      isValid = false;
    } else {
      setSubjectError(false);
    }

    if (!form.current.message.value.trim()) {
      setMessageError(true);
      isValid = false;
    } else {
      setMessageError(false);
    }

    return isValid;
  }

  return (
    <Container>
      <Wrapper>
        <Title>Contato</Title>
        <Desc>
          Sinta-se à vontade para entrar em contato comigo em caso de dúvidas ou
          oportunidades!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Envie um Email! 🚀</ContactTitle>
          <ContactInput
            placeholder="Digite seu E-mail"
            name="from_email"
            error={emailError}
          />
          <ContactInput
            placeholder="Digite seu nome"
            name="from_name"
            error={nameError}
          />
          <ContactInput
            placeholder="Assunto"
            name="subject"
            error={subjectError}
          />
          <ContactInputMessage
            placeholder="Mensagem"
            rows="4"
            name="message"
            error={messageError}
          />
          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email enviado com sucesso!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
}
