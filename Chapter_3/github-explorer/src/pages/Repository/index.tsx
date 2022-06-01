import React from 'react';
import { useMatch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InfoNumbers } from '../../components/InfoNumbers';
import { RepositoryCard } from '../../components/RepositoryCard';

import { RepositoryHeader, RepositoryList } from './styles';

interface ParamsProps {
  params: {
    repository: string;
  }
}

export const Repository: React.FC = () => {
  const test = useMatch({ path: '/repositories/:repository' });
  const { params } = test as ParamsProps;
  return (
    <>
      <Header isBackButton />
      <RepositoryHeader>
        <header>
          <img src="https://avatars.githubusercontent.com/u/64987824?v=4" alt="profile" />
          <div>
            <h1>{params.repository}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Autem neque officiis doloremque
              explicabo
              sequi.
              Accusantium, accusamus error in esse, autem,
              eaque mollitia nemo dolore magni earum neque
              deleniti ut ullam?
            </p>
          </div>
        </header>

        <ul>
          <InfoNumbers number={1808} title="Stars" />
          <InfoNumbers number={48} title="Forks" />
          <InfoNumbers number={67} title="Issues abertas" />
        </ul>
      </RepositoryHeader>

      <RepositoryList>
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
        <RepositoryCard />
      </RepositoryList>
    </>
  );
};
