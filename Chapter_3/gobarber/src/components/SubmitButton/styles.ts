import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  button {
      flex: 1;
      height: 3.5rem;

      border: none;
      border-radius: 0.625rem;
      margin: 1.5rem 0;
      color: var(--background);
      background-color: var(--orange-400);
      font-weight: 500;
      transition: 0.3s background-color;

      line-height: 1.319rem;
      &:hover {
        background-color: ${shade(0.2, `#FF9000`)};
      }
    }
`;
