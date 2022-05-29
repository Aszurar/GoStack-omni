import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

export function Input({ name, icon: Icon, ...rest }: InputProps) {
  return (
    <Container>
      {Icon &&
        <div>
          <Icon />
        </div>
      }
      <input name={name} {...rest} />
    </Container>
  );
}
