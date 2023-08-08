import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 50%;
  height: calc(100vh - 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
`;
export const ChatContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;
