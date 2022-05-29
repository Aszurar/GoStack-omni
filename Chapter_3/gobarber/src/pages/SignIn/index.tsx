import React from 'react';
import Logo from '../../assets/logo.svg';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { Background, Container, Content } from './styles';
import { FiMail } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';

export function SignIn() {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <form>
          <h1>Faça seu login</h1>

          <Input
            type="email"
            name="email"
            icon={FiMail}
            autoComplete="on"
            placeholder="E-mail"
          />

          <Input
            type="password"
            name="password"
            icon={FiLock}
            placeholder="Senha"
          />
          <SubmitButton title='Entrar' />

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
}
