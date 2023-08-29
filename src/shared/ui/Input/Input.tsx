import React, {
  FC,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
} from "react";
import { StyledInput } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export const Input: FC<InputProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLInputElement>) => {
    return <StyledInput {...props} ref={ref} />;
  }
);
