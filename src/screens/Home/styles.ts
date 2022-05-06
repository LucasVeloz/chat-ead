import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.main`
  section {
    padding: 50px;
    display: flex;
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
    }
    h1 {
      font-size: 64px;
      margin-bottom: 10px;
    }

    p {
      max-width: 800px;
    }
    img {
      width: 500px;
      height: 500px;
      border-radius: 50%;
      align-self: center;
      margin: 0 20px;

    }
  }
`;