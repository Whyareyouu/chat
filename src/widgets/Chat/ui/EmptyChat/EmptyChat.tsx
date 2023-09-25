import React from "react";
import { StyledEmptyChat } from "./EmptyChat.styles";

export const EmptyChat = () => {
  return (
    <StyledEmptyChat>
      <h2>Выберите собеседника</h2>
      <p>Пожалуйста, выберите с кем вы хотите начать общение.</p>
    </StyledEmptyChat>
  );
};
