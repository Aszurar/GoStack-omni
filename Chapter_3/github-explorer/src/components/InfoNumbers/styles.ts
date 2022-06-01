import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 2.25rem;
    line-height: 2.625rem;
    color: var(--dark-500);

    margin-bottom: 0.25rem;
  }

  span {
    font-size:  1.25rem;
    line-height: 1.438rem;
    color: var(--gray-100);
  }
`;
