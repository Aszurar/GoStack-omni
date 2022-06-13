import { shade } from 'polished';
import styled from 'styled-components';

import signInBackground from '../../assets/signIn_background.svg';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 43.75rem;
  width: 100%;

  align-items: center;
  justify-content: center;

  img {
    width: 14.377rem;
    height: 8.375rem;
  }

  form {
    display: flex;
    flex-direction: column;

    margin: 5rem 0;

    align-items: center;
    justify-content: center;

    max-width: 340px;
    width: 100%;

    h1 {
      font-size: 2rem;
      color: var(--white-400);

      margin-bottom: 1.5rem;
    }

    a {
      color: var(--white-400);
      line-height: 1.319rem;
      transition: 0.3s background-color;

      &:hover {
        color: ${shade(0.2, `#F4EDE8`)};
      }
    }
  }

  > a {
    display: flex;
    align-items: center;
    color: var(--orange-400);
    line-height: 1.319rem;

    transition: 0.3s background-color;

    &:hover {
      color: ${shade(0.2, `#FF9000`)};
    }

    svg {
      width: 1.25rem;
      height: 1.25rem;

      margin-right: 1rem;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex: 1;

  background: url(${signInBackground}) no-repeat center;
  background-size: cover;
`;
