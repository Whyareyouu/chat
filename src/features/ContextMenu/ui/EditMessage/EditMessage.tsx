import { useForm, Controller } from "react-hook-form";
import { Modal } from "shared/ui/Modal/Modal";
import { FC, useEffect } from "react";
import { Textarea } from "shared/ui/Textarea/Textarea";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import {
  ButtonContainer,
  Form,
} from "features/ContextMenu/ui/EditMessage/EditMessage.styles";
import { MessagesWithUser } from "entities/Chat";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { editMessage } from "entities/Message/model/services/editMessage/editMessage";

interface EditMessageProps {
  isOpen: boolean;
  onClose: () => void;
  message: MessagesWithUser;
}

export const EditMessage: FC<EditMessageProps> = ({
  isOpen,
  message,
  onClose,
}) => {
  const { control, handleSubmit, reset } =
    useForm<Pick<MessagesWithUser, "content">>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (message?.content) {
      reset({
        content: message.content,
      });
    }
  }, [message]);

  const handleChangeMessage = (
    formState: Pick<MessagesWithUser, "content">
  ) => {
    dispatch(editMessage({ ...message, ...formState }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(handleChangeMessage)}>
        <Controller
          control={control}
          name={"content"}
          defaultValue={message.content || ""}
          render={({ field: { onChange, value } }) => (
            <Textarea onChange={onChange} value={value} />
          )}
        />
        <ButtonContainer>
          <Button onClick={onClose}>Отменить</Button>
          <Button theme={ButtonTheme.PRIMARY} type={"submit"}>
            Изменить
          </Button>
        </ButtonContainer>
      </Form>
    </Modal>
  );
};
