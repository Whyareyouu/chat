import styled from "styled-components";
import { ContextMenu } from "features/ContextMenu";

export const MessagesContainer = styled(ContextMenu)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
