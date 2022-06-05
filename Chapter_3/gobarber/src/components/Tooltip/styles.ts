import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1;

  span {
    display: flex;
    flex: 1;

    width: 12.5rem;

    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-left: 0.25rem;

    font-size: 0.875rem;
    font-weight: 500;
    text-align: center;

    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);

    opacity: 0;
    visibility: hidden;

    transition: opacity 0.5s, visibility 0.5s;

    //trianfulo laranja em baixo da mensagem de erro
    //hack de css, só aceite que dói menos
    &:before {
      content: '';
      border-style: solid;
      border-width: 6px 6px 0 6px;

      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
