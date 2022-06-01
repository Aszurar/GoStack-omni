import styled from 'styled-components';

export const Container = styled.a`
  background-color: var(--white);
  display: flex;
  padding: 0 1.5rem;
  height: 7rem;

  border-radius: 0.313rem;

  align-items: center;

  border: 1px solid transparent;

  transition: transform 0.3s, background-color 0.7s, border 0.3s, box-shadow 0.3s;

  &:hover{
    box-shadow: -0.2rem 0 0.5rem var(--dark-400);
    border: 1px solid var(--dark-400);

    transform: translateX(1rem);

    svg {
      color: var(--gray-400);
    }
  }
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 1.5rem;
      color: var(--dark-500);
      line-height: 1.75rem;
    }

    span {
      font-size: 1.125rem;
      line-height: 1.313rem;
      color: var(--gray-400);

      margin-top: 0.5rem;
    }
  }
  svg {
    width: 2rem;
    height: 2rem;
    color: var(--gray-200);
  }
`;
