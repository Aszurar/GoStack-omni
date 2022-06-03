import { shade } from 'polished';
import styled, { css } from 'styled-components';
import signUpBackground from '../../assets/signUp_background.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  /* background-color: yellow; */
`;

export const ImgBackground = styled.div`
  display: flex;
  flex: 1;
  background: url(${signUpBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
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
    max-width: 340px;
    width: 100%;

    margin: 5rem 0;
  }

  a {
    display: flex;
    align-items: center;

    color: var(--white-400);

    transition: 0.5s color;

    &:hover {
        color: ${shade(0.2, `#F4EDE8`)};
    }

    svg {
      margin-right: 1rem;
      width: 1rem;
      height: 1rem;
    }

  }
`;
