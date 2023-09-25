import type { Meta, StoryObj } from "@storybook/react";
import { VoiceRecorder } from "./VoiceRecorder";

const meta = {
  title: "features/VoiceRecorder",
  component: VoiceRecorder,
  tags: ["autodocs"],
} satisfies Meta<typeof VoiceRecorder>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
