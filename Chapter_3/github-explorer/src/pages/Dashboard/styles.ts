import { shade } from 'polished';
import styled from 'styled-components';

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

export const SearchInput = styled.input`
  display: flex;
  flex: 1;
  color: var(--dark-400);

  padding: 0 1.875rem;
  border: none;
  border-top-left-radius: 0.313rem;
  border-bottom-left-radius: 0.313rem;
  ::placeholder {
    color: var(--gray-400);
  }
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

  transition: background-color 0.2s;

  &:hover {
    background-color: ${shade(0.2, '#04D361')};
  }
  `;
