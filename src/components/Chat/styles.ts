import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  flex-direction: column;
  background: white;

  .header {
    padding: 20px;
    border: 1px solid #c6c6c6;
    display: flex;
    justify-content: space-between;
  }

  .content {
    overflow-y: scroll;
    padding: 20px;
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .invisible {
  }

  .userContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  input {
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #c6c6c6;
    display: flex;
    flex: 1;
    margin-right: 20px;
  }
  
  button {
    padding: 5px 20px;
    background: #ff0066;
    border-radius: 5px;
    border: none;
  }
`;


const BaseMessagesContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

`;

export const RobotMessages = styled(BaseMessagesContainer)`
  background: gray;
  align-self: flex-start;
`;

export const UserMessages = styled(BaseMessagesContainer)`
  background: green;
  align-self: flex-end;
`;

export const Message = styled.p`
`;



export const ChatContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;

  .openChat {
    width: 48px;
    height: 48px;
    border-radius: 24px;
    background: #ff0066;
    border: none;
  }
`;
