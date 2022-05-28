/* eslint-disable indent */
import { shade, setLightness } from 'polished';
import styled, { css } from 'styled-components';

export const Logo = styled.img`
  align-self: flex-start;
  height: 2rem;
`;

export const Header = styled.div`
  display: flex;
  margin-top: 6.25rem;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: var(--dark-400);
  line-height: 3.516rem;
`;

export const Form = styled.form`
  display: flex;
  max-width: 43.75rem;
  margin-top: 2.5rem;
  height: 4.5rem;

  border-radius: 1rem;
`;

interface ISearchInput {
  hasError: boolean;
}

export const SearchInput = styled.input<ISearchInput>`
  display: flex;
  flex: 1;
  color: var(--dark-400);

  padding: 0 1.875rem;
  border: 2px solid var(--white);
  border-right: none;
  border-top-left-radius: 0.313rem;
  border-bottom-left-radius: 0.313rem;
  ::placeholder {
    color: var(--gray-400);
  }

  ${({ hasError }) => hasError && css`
    border-color: ${setLightness(0.6, '#C53030')};
  `}
`;

export const SearchButton = styled.button`
  display: flex;
  width: 13.125rem;

  align-items: center;
  justify-content: center;

  background-color: var(--green-400);
  border: none;
  border-top-right-radius: 0.313rem;
  border-bottom-right-radius: 0.313rem;

  color: var(--white);
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.318rem;

  transition: background-color 0.5s;

  &:hover {
    background-color: ${shade(0.2, '#04D361')};
  }
  `;

export const ErrorText = styled.span`
  display: flex;
  margin-top: 0.5rem;
  color: ${setLightness(0.6, '#C53030')};
`;

export const RepositoriesList = styled.div`
max-width: 43.75rem;

margin-top: 7.5rem;

  a {
  min-height: 7rem;
  width: 100%;
  background-color: var(--white);
  padding: 1rem;

  display: block;

  display: flex;
  align-items: center;

  border-radius: 0.313rem;
  border: 2px solid transparent;

  transition: transform 0.3s, background-color 0.7s, border 0.3s, box-shadow 0.3s;

    & + a {
    margin-top: 1rem;
  }

    &:hover{

    box-shadow: -0.2rem 0 0.5rem var(--dark-400);
    border: 2px solid var(--green-400);

    transform: translateX(1rem);
  }

    img{
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  }
    div{
    margin: 0 1.5rem;
    flex: 1;
      strong{
      font-size: 1.5rem;
      line-height: 1.758rem;
      color: var(--dark-500);
    }

      p{
      font-size: 1.125rem;
      margin-top: 0.25rem;
      line-height: 1.318rem;
      color: var(--gray-400);
      text-align: justify;
    }
  }
    svg {
    margin-left: auto;
    color: var(--gray-300);
  }
}
`;
