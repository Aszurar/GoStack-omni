import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
} from './styles';

interface RepositoryCardProps {
  title: string;
  author: string;
}

export function RepositoryCard({ title, author }: RepositoryCardProps) {
  return (
    <Container>
      <div>
        <h1>{title}</h1>
        <span>{author}</span>
      </div>
      <FiChevronRight />
    </Container>

  );
}
