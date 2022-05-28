import { FormEvent, useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/logo.svg';
import { api } from '../../services/api';
import {
  ErrorText,
  Form,
  Header,
  Logo,
  RepositoriesList,
  SearchButton,
  SearchInput,
  Title,
} from './styles';

interface IRepositories {
  name: string;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export function Dashboard() {
  const storageKey = '@GithubExplorer:repositories';

  const [repositories, setRepositories] = useState<IRepositories[]>(() => {
    const storageRepositories = localStorage.getItem(
      storageKey,
    );
    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    }
    return [];
  });

  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<IRepositories>(`repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setInputError('');
    } catch (error: any) {
      setInputError('Erro ao buscar repositório');
      throw new Error('Erro ao buscar repositório', error.message);
    }
  }

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(repositories));
  }, [repositories]);

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

        <Form onSubmit={(e) => handleAddRepository(e)}>
          <SearchInput
            type="search"
            autoComplete="on"
            hasError={!!inputError}
            onChange={(e) => setNewRepo(e.target.value)}
            placeholder="Digite o nome do repositório"
          />

          <SearchButton
            type="submit"
          >
            Pesquisar
          </SearchButton>
        </Form>

        {!!inputError && <ErrorText>{inputError}</ErrorText>}
      </Header>

      <RepositoriesList>
        {
          repositories.map((repository) => (
            <Link to={`/repositories/${repository.full_name}`} key={repository.full_name}>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight
                size={32}
              />
            </Link>
          ))
        }

      </RepositoriesList>

    </>
  );
}
