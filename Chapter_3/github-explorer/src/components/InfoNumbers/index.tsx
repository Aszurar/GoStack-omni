import React from 'react';

import {
  Container,
} from './styles';

interface InfoNumbersProps {
  title: string;
  number: number;
}

export function InfoNumbers({ title, number }: InfoNumbersProps) {
  return (
    <Container>
      <strong>{number}</strong>
      <span>{title}</span>
    </Container>
  );
}
