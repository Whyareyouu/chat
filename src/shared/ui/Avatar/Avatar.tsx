import React, { FC, ImgHTMLAttributes } from "react";
import { StyledAvatar } from "shared/ui/Avatar/Avatar.styles";

export enum AvatarSize {
  M = "sizeM",
  L = "sizeL",
  XL = "sizeXL",
}
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: AvatarSize;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { size = AvatarSize.M, alt, src } = props;
  return <StyledAvatar size={size} src={src} alt={alt} />;
};
