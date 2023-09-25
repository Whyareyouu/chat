import { useState } from "react";

export const VoiceRecorder = () => {
  const [isRecord, setIsRecord] = useState<boolean>(false);
  const handleStartRecord = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then()
      .catch((e) => console.log("Ошибка при записи голосового сообщения", e));
  };
  return <div></div>;
};
