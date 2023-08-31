import styled from "styled-components";
import { MdOutlineAddAPhoto } from "react-icons/md";
export const StyledUserProfile = styled.div`
  max-width: var(--sidebar-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const UploadIcon = styled(MdOutlineAddAPhoto)`
  position: absolute;
  z-index: 2;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
`;
export const Label = styled.label`
  input {
    display: none;
    opacity: 0;
  }

  display: block;
  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    background-color: rgba(56, 49, 49, 0.6);
    position: absolute;
    top: -3px;
    left: 0;
    opacity: 50%;
  }

  &:hover ${UploadIcon} {
    width: 80px;
    height: 80px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
