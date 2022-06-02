import styled from 'styled-components';

export const RepositoryHeader = styled.div`
header {
    display: flex;
    flex: 1;

    align-items: center;
    img {
      width: 7rem;
      height: 7rem;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex: 1;
      flex-direction: column;
      margin-left: 2rem;
      padding: 1.344rem 0;


      h1 {
        font-size: 2.25rem;
        color: var(--dark-400);
      }

      p {
        font-size: 1.25rem;
        color: var(--gray-300);
        margin-top: 0.75rem;
        text-align: justify;
      }
    }
  }

  ul {
    list-style-type: none;

    display: flex;
    flex: 1;

    margin-top: 1.5rem;
    li + li {
      margin-left: 5rem;
    }
  }
`;

export const RepositoryList = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 5rem 0;

  a + a {
    margin-top: 1rem;
  }
`;
