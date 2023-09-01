import {
  Form,
  Label,
  StyledUserProfile,
  UploadIcon,
} from "./UserProfile.styles";
import { Input } from "shared/ui/Input/Input";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useForm } from "react-hook-form";
import { UserData } from "../model/types/userData";
import { useSelector } from "react-redux";
import { getUserData, updateUser, updateUserAvatar } from "entities/User";
import { ChangeEvent, useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { BASE_URL } from "shared/api/api";

export const UserProfile = () => {
  const userData = useSelector(getUserData);
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<UserData>({
    defaultValues: userData,
  });

  const handleChangeAvatar = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const avatar = e.target.files && e.target.files[0];
      if (!avatar) return;
      const formData = new FormData();
      formData.append("avatar", avatar);
      await dispatch(updateUserAvatar(formData));
    },
    [dispatch]
  );

  const handleChangeUserData = useCallback(
    async (data: UserData) => {
      await dispatch(updateUser(data));
    },
    [dispatch]
  );

  return (
    <StyledUserProfile>
      <Label>
        <Avatar size={AvatarSize.XL} src={`${BASE_URL}/${userData?.avatar}`} />
        <UploadIcon />
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          onChange={handleChangeAvatar}
        />
      </Label>
      <Form onSubmit={handleSubmit(handleChangeUserData)}>
        <Input placeholder="Имя" {...register("name", { maxLength: 30 })} />
        <Input
          placeholder="Никнейм"
          {...register("username", { maxLength: 30 })}
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
