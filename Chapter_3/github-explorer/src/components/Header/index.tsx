import React from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  Container,
} from './styles';

import LogoSvg from '../../assets/logo.svg';

interface HeaderProps {
  isBackButton?: boolean;
}

export function Header({ isBackButton = false }: HeaderProps) {
  return (
    <Container>
      <img
        src={LogoSvg}
        alt="Logo"
      />
      {isBackButton && (
        <Link to="/">
          <FiChevronLeft />
          <strong>Voltar</strong>
        </Link>
      )}
    </Container>
  );
}
