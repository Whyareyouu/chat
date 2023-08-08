import styled from "styled-components";
import { MessageType } from "shared/ui/Message/Message";

interface StyledMessageProps {
  type?: MessageType;
}

export const StyledMessage = styled.div<StyledMessageProps>`
  max-width: 50%;
  background-color: ${(props) => `var(${props.type})`};
  border-radius: var(--xl-border-radius);
  padding: 10px 20px;
  overflow-wrap: break-word;
  white-space: break-spaces;
  align-self: ${(props) =>
    props.type === MessageType.INCOMING ? "flex-start" : "flex-end"};
`;
