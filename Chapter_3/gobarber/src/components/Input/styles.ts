import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  border: 2px solid var(--black-600);

  align-items: center;
  justify-content: center;

  background-color: var(--black-600);
  border-radius: 0.625rem;

  & + div {
      margin-top: 0.5rem;
    }

  div {
    height: 100%;

    display: flex;
    padding: 0 1rem;

    align-items: center;
    justify-content: center;

    border-radius: 0.625rem 0 0 0.625rem;

    svg {
      width: 1.25rem;
      height: 1.125rem;
      color: var(--gray-500);
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
