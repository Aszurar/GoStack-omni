import { useField } from '@unform/core';
import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconType } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, ErrorContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

export const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const { fieldName, defaultValue, error, registerField } = useField(name);
  // console.log(error);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocused = useCallback((): void => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback((): void => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      {Icon && (
        <div>
          <Icon />
        </div>
      )}
      <input
        ref={inputRef}
        name={name}
        defaultValue={defaultValue}
        onFocus={handleInputFocused}
        onBlur={handleInputBlur}
        {...rest}
      />
      {error && (
        <ErrorContainer title={error}>
          <FiAlertCircle color="#C53030" size={24} />
        </ErrorContainer>
      )}
    </Container>
  );
};
