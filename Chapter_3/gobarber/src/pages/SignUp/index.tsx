import React, { useCallback } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';
import Logo from '../../assets/logo.svg';
import { Container, Content, ImgBackground } from './styles';

export const SignUp: React.FC = () => {
  // const handleSignUp = useCallback((data: object): void => {
  //   console.log('dados do submit:', data);
  // }, []);

  const handleSignUp = (data: object): void => {
    console.log('dados do submit:', data);
  };

  return (
    <Container>
      <ImgBackground />
      <Content>
        <img src={Logo} alt="Logo" />

        <Form onSubmit={handleSignUp}>
          <Input
            name="name"
            type="text"
            icon={FiUser}
            autoComplete="on"
            placeholder="Nome"
            autoCapitalize="word"
          />
          <Input
            name="email"
            type="email"
            icon={FiMail}
            autoComplete="on"
            placeholder="E-mail"
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <SubmitButton title="Cadastrar" />
        </Form>

        <a href="/test">
          <FiArrowLeft />
          Voltar para o login
        </a>
      </Content>
    </Container>
  );
};
