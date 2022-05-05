import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  background: #ff0066;

  display: flex;
  justify-content: flex-end;

  nav {

  }
  ul {
    display: flex;
  }
  li {
    cursor: pointer;
    list-style: none;
    color: white;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;