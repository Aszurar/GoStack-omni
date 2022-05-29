import React, { InputHTMLAttributes, useRef, useState } from 'react';
import { IconType } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

export function Input({ name, icon: Icon, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocused() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      {Icon &&
        <div>
          <Icon />
        </div>
      }
      <input
        ref={inputRef}
        name={name}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
}
