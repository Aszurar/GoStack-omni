import React from 'react';
import {
  Form,
  Header,
  Logo,
  SearchButton,
  SearchInput,
  Title,
} from './styles';
import LogoSvg from '../../assets/logo.svg';

export function Dashboard() {
  return (
    <>
      <Logo
        src={LogoSvg}
        alt="Logo"
      />

      <Header>
        <Title>
          Explore repositórios
          <br />
          no Github.
        </Title>

        <Form>
          <SearchInput
            autoComplete="on"
            type="search"
            placeholder="Digite o nome do repositório"
          />

          <SearchButton>
            Pesquisar
          </SearchButton>
        </Form>
      </Header>
    </>
  );
}
