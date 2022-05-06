import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  background: #ff0066;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }

  nav {

  }
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    list-style: none;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }
`;