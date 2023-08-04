import type { Meta, StoryObj } from "@storybook/react";
import { Message, MessageType } from "shared/ui/Message/Message";

const meta = {
  title: "shared/Message",
  component: Message,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageIncoming: Story = {
  args: {
    children: "hello world!",
  },
};
export const MessageOutgoing: Story = {
  args: {
    children: "hello world!",
    type: MessageType.OUTGOING,
  },
};
