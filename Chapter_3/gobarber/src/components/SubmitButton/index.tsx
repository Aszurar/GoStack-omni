import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  title,
  ...rest
}) => {
  return (
    <Container>
      <button type="submit" {...rest}>
        {title}
      </button>
    </Container>
  );
};
