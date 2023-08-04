import styled from "styled-components";
import { MessageType } from "shared/ui/Message/Message";

interface StyledMessageProps {
  type?: MessageType;
}

export const StyledMessage = styled.div<StyledMessageProps>`
  background-color: ${(props) => `var(${props.type})`};
  border-radius: var(--xl-border-radius);
  padding: 10px 20px;
`;
