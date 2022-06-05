import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex: 1;
  width: 100%;
  border: 2px solid var(--black-600);

  align-items: center;
  justify-content: center;

  background-color: var(--black-600);
  border-radius: 0.625rem;

  padding-right: 1rem;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: var(--red-400);
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: var(--orange-400);
    `}

  & + div {
    margin-top: 0.5rem;
  }

  div:first-child {
    height: 100%;

    display: flex;
    padding: 0 1rem;

    align-items: center;
    justify-content: center;

    border-radius: 0.625rem 0 0 0.625rem;

    svg {
      width: 1.25rem;
      height: 1.125rem;
      color: ${({ isFocused, isFilled }) =>
    isFocused || isFilled ? 'var(--orange-400)' : 'var(--gray-500)'};
    }
  }

  input {
    display: flex;
    flex: 1;

    height: 3.5rem;
    border: none;
    border-radius: 0 0.625rem 0.625rem 0;

    background-color: transparent;

    color: var(--white-400);
    line-height: 1.319rem;

    ::placeholder {
      color: var(--gray-500);
      line-height: 1.313rem;
    }
  }
`;

export const ErrorContainer = styled(Tooltip)`
  height: 2.5rem;
  display: flex;
  align-items: center;

  svg {
    margin-left: 0.5rem;
  }
  span {
    background-color: var(--red-400);
    color: var(--white);

    &:before {
      border-color: var(--red-400) transparent;
    }
  }
`;
