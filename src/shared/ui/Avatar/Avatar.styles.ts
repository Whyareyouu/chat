import styled, { css } from "styled-components";
import { AvatarSize } from "shared/ui/Avatar/Avatar";

interface StyledAvatarProps {
  size?: AvatarSize;
}

export const StyledAvatar = styled.img<StyledAvatarProps>`
  border-radius: 50%;
  background-color: var(--gray-default);
  ${(props) => {
    switch (props.size) {
      case AvatarSize.M:
        return css`
          width: 40px;
          height: 40px;
        `;
      case AvatarSize.L:
        return css`
          width: 82px;
          height: 82px;
        `;
      case AvatarSize.XL:
        return css`
          width: 200px;
          height: 200px;
        `;
    }
  }};
`;
