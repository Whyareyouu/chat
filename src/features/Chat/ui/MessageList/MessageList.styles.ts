import styled from "styled-components";
import { ContextMenu } from "features/ContextMenu";

export const MessageContainer = styled(ContextMenu)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: scroll;
`;
