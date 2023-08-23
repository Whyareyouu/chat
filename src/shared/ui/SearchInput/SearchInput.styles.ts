import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
export const SearchInputWrapper = styled.label`
  border: 2px solid var(--border-input);
  width: 100%;
  display: flex;
  align-items: center;
  background-color: var(--main-bg);
  padding: 10px;
  border-radius: 30px;
  gap: 10px;
  &:focus-within {
    border: 2px solid var(--primary);
  }
`;

export const SearchIcon = styled(FaSearch)`
  color: #888;
  width: 20px;
  height: 20px;
  ${SearchInputWrapper}:focus-within & {
    color: var(--primary);
  }
`;

export const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background: none;
  color: var(--white);
`;
