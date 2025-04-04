import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import React, { useRef } from 'react';
import {
  EMAIL_TEMPLATE_SERVICE,
  EMAIL_TOKEN,
  EMAIL_TOKEN_SERVICE,
} from '../../../constants/BASE_API_EMAIL';
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
} from './components';

export function Contact() {
  const [open, setOpen] = React.useState(false);
  const [errors, setErrors] = React.useState({
    email: false,
    name: false,
    subject: false,
    message: false,
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.values(validationErrors).every((error) => !error)) {
      emailjs
        .sendForm(
          EMAIL_TOKEN_SERVICE,
          EMAIL_TEMPLATE_SERVICE,
          form.current,
          EMAIL_TOKEN,
        )
        .then(
          () => {
            setOpen(true);
            form.current.reset();
          },
          (error) => {
            console.log(error.text);
          },
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
    const validationErrors = {
      email: !validateEmail(form.current.from_email.value),
      name: !validateName(form.current.from_name.value),
      subject: !validateSubject(form.current.subject.value),
      message: !form.current.message.value.trim(),
    };

    setErrors(validationErrors);

    return validationErrors;
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
            error={errors.emailError}
          />
          {errors.email && <div style={{ color: 'red' }}>Email inválido</div>}
          <ContactInput
            placeholder="Digite seu nome"
            name="from_name"
            error={errors.nameError}
          />
          {errors.name && <div style={{ color: 'red' }}>Nome inválido</div>}
          <ContactInput
            placeholder="Assunto"
            name="subject"
            error={errors.subject}
          />
          {errors.subject && (
            <div style={{ color: 'red' }}>Assunto inválido</div>
          )}
          <ContactInputMessage
            placeholder="Mensagem"
            rows="4"
            name="message"
            error={errors.message}
          />
          {errors.message && (
            <div style={{ color: 'red' }}>Messagem inválida</div>
          )}
          <ContactButton type="submit">Enviar</ContactButton>
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email enviado com sucesso!"
          severity="success"
          style={{ background: 'white', color: 'black' }}
        />
      </Wrapper>
    </Container>
  );
}
