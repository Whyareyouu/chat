import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { FC, HTMLAttributes } from "react";
import { StyledShortUserProfile } from "./ShortUserProfile.styles";

interface ShortUserProfileProps extends HTMLAttributes<HTMLDivElement> {
  username: string;
}

export const ShortUserProfile: FC<ShortUserProfileProps> = ({
  username,
  onClick,
}) => {
  return (
    <StyledShortUserProfile onClick={onClick}>
      <Avatar size={AvatarSize.M} />
      <div>
        <span>{username}</span>
      </div>
    </StyledShortUserProfile>
  );
};
