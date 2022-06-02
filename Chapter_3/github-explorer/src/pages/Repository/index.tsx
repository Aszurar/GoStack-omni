import React, { useEffect, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InfoNumbers } from '../../components/InfoNumbers';
import { RepositoryCard } from '../../components/RepositoryCard';
import { api } from '../../services/api';

import { RepositoryHeader, RepositoryList } from './styles';

interface ParamsProps {
  params: {
    repository: string;
  }
}

interface RepositoryInfo {
  full_name: string;
  owner: {
    avatar_url: string;
  };
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}

interface Issue {
  id: number;
  title: string;
  user: {
    login: string;
  }
}

export const Repository: React.FC = () => {
  const test = useMatch({ path: '/repositories/:repository' });
  const { params } = test as ParamsProps;
  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo>();

  const [issue, setIssues] = useState<Issue[]>([] as Issue[]);

  useEffect(() => {
    async function loadRepositoryData() {
      try {
        const [responseRepositoryInfo, responseIssue] = await Promise.all([
          api.get<RepositoryInfo>(`repos/${params.repository}`),
          api.get<Issue[]>(`repos/${params.repository}/issues`),
        ]);
        setRepositoryInfo(responseRepositoryInfo.data);
        setIssues(responseIssue.data);
      } catch (err) {
        console.log(err);
      }
    }

    loadRepositoryData();
  }, [params.repository]);
  return (
    <>
      <Header isBackButton />
      {repositoryInfo && (
        <RepositoryHeader>
          <header>
            <img src={repositoryInfo.owner.avatar_url} alt="profile" />
            <div>
              <h1>{repositoryInfo.full_name}</h1>
              <p>{repositoryInfo.description}</p>
            </div>
          </header>

          <ul>
            <InfoNumbers number={repositoryInfo.stargazers_count} title="Stars" />
            <InfoNumbers number={repositoryInfo.forks_count} title="Forks" />
            <InfoNumbers number={repositoryInfo.open_issues_count} title="Issues abertas" />
          </ul>
        </RepositoryHeader>
      )}
      <RepositoryList>
        {(issue.length > 0) && issue.map((item: Issue) => (
          <RepositoryCard
            key={item.id}
            title={item.title}
            author={item.user.login}
          />
        ))}
      </RepositoryList>
    </>
  );
};
