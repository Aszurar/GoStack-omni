import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Input } from '../../components/Input';
import { SubmitButton } from '../../components/SubmitButton';
import Logo from '../../assets/logo.svg';
import { Container, Content, ImgBackground } from './styles';
import { getValidationErrors } from '../../utils/getValidationErrors';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um e-mail válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});

export const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback((data: object): void => {
    try {
      formRef.current?.setErrors({});
      console.log('dados do submit:', data);
      schema.validateSync(data, { abortEarly: false });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <ImgBackground />
      <Content>
        <img src={Logo} alt="Logo" />

        <Form ref={formRef} onSubmit={handleSignUp}>
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
            type="text"
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
