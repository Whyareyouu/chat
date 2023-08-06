import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAppLink = styled(Link)`
  color: var(--primary);
  text-decoration: none;
  &:hover {
    color: var(--primary-hover);
  }
`;
