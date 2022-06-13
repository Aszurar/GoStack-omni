import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Logo from '../../assets/logo.svg';
import { Background, Container, Content } from './styles';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';
import { getValidationErrors } from '../../utils/getValidationErrors';

const schema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});

export const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      schema.validateSync(data, { abortEarly: false });
      console.log('dados do submit - login:', data);
    } catch (err) {
      console.log(err);
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);
  return (
    <Container>
      <Content>
        <img src={Logo} alt="logo" />
        <Form ref={formRef} onSubmit={handleSignIn}>
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
          <SubmitButton title="Entrar" />

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};
