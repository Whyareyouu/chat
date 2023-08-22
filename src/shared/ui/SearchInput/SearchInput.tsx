import {
  SearchIcon,
  StyledSearchInput,
  SearchInputWrapper,
} from "./SearchInput.styles";
import { FC, InputHTMLAttributes } from "react";
interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const SearchInput: FC<SearchInputProps> = ({
  onChange,
  value,
  placeholder,
}) => {
  return (
    <SearchInputWrapper>
      <SearchIcon />
      <StyledSearchInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </SearchInputWrapper>
  );
};
