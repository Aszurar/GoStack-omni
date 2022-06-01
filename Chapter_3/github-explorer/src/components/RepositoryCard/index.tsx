import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import {
  Container,
} from './styles';

export function RepositoryCard() {
  return (
    <Container>
      <div>
        <h1>gostack-desafio-conceitos-react-native</h1>
        <span>Diego Fernandes</span>
      </div>
      <FiChevronRight />
    </Container>

  );
}
