import { Form, StyledUserProfile } from "./UserProfile.styles";
import { Input } from "shared/ui/Input/Input";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useForm } from "react-hook-form";
import { UserData } from "../model/types/userData";

export const UserProfile = () => {
  const { register, handleSubmit } = useForm<UserData>();
  const handleChangeUserData = (data: UserData) => {
    console.log(data);
  };
  return (
    <StyledUserProfile>
      <Avatar size={AvatarSize.XL} />
      <Form onSubmit={handleSubmit(handleChangeUserData)}>
        <Input placeholder="Имя" {...register("name", { maxLength: 30 })} />
        <Input
          placeholder="Никнейм"
          {...register("nickname", { maxLength: 30 })}
        />
        <div>
          <Button theme={ButtonTheme.PRIMARY} type="submit">
            Сохранить
          </Button>
        </div>
      </Form>
    </StyledUserProfile>
  );
};
