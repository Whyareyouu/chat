import { Form, StyledUserProfile } from "./UserProfile.styles";
import { Input } from "shared/ui/Input/Input";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";

export const UserProfile = () => {
  return (
    <StyledUserProfile>
      <Avatar size={AvatarSize.XL} />
      <Form>
        <Input placeholder="Имя" />
        <Input placeholder="Никнейм" />
      </Form>
    </StyledUserProfile>
  );
};
