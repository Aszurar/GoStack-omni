import React, { ButtonHTMLAttributes } from 'react';

import {
  Container
} from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function SubmitButton({ title, ...rest }: SubmitButtonProps) {
  return (
    <Container>
      <button type="submit"
        {...rest}
      >{title}</button>
    </Container>
  );
}
