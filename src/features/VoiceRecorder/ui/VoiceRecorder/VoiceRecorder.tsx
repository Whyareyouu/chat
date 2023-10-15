import { useRef, useState } from "react";
import {
  MicrophoneIcon,
  StyledVoiceRecorder,
} from "features/VoiceRecorder/ui/VoiceRecorder/VoiceRecorder.styles";
import { ButtonTheme } from "shared/ui/Button/Button";

export const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const handleStartRecording = () => {
    if (!isRecording) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          const mediaRecorder = new MediaRecorder(stream);
          const audioChunks: Blob[] = [];
          mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) {
              audioChunks.push(e.data);
            }
          };
          mediaRecorder.onstop = () => {
            const audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
            setIsRecording(false);
            setAudioBlob(audioBlob);
            //@todo Дописать метод по отправке голосового сообщения
          };
          mediaRecorder.start();
          setIsRecording(true);
          mediaRecorderRef.current = mediaRecorder;
        })
        .catch((e) => console.log("Ошибка при записи голосового сообщения", e));
    } else {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
      setIsRecording(false);
    }
  };
  return (
    <div>
      <StyledVoiceRecorder
        theme={ButtonTheme.PRIMARY}
        onClick={handleStartRecording}
      >
        {isRecording ? "Остановить запись" : <MicrophoneIcon />}
      </StyledVoiceRecorder>
      {audioBlob && (
        <audio controls>
          <source src={URL.createObjectURL(audioBlob)} />
        </audio>
      )}
    </div>
  );
};
