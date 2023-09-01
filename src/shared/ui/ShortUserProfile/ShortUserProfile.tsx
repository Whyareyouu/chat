import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { FC, HTMLAttributes } from "react";
import {
  LastMessage,
  StyledShortUserProfile,
  UserInfo,
} from "./ShortUserProfile.styles";

interface ShortUserProfileProps extends HTMLAttributes<HTMLDivElement> {
  username: string;
  lastMessage?: string;
  avatar?: string;
}

export const ShortUserProfile: FC<ShortUserProfileProps> = ({
  username,
  lastMessage,
  onClick,
  avatar,
}) => {
  return (
    <StyledShortUserProfile onClick={onClick}>
      <Avatar size={AvatarSize.M} src={avatar} />
      <UserInfo>
        <span>{username}</span>
        <LastMessage>{lastMessage}</LastMessage>
      </UserInfo>
    </StyledShortUserProfile>
  );
};
