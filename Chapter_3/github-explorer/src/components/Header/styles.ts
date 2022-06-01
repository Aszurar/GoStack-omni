import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  img {
    align-self: flex-start;
    height: 2rem;
  }

  a {
    background: none;
    border: none;
    display: flex;

    align-items: center;
    justify-content: center;

    color: var(--gray-400);

    transition: color 0.5s;
    &:hover {
      color: ${shade(0.2, '#A8A8B3')};
    }

    svg {
      width: 1rem;
      height: 1rem;
    }

    strong {
      margin-left: 0.25rem;
    }
  }

`;
