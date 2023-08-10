import type { Meta, StoryObj } from "@storybook/react";

import { Chat } from "./Chat";
import { LoginForm } from "features/AuthByUsername";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/Chat",
  component: Chat,
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    recipientId: "f1b46d49-077e-4545-8cc8-9c0d9d1e16da",
  },
  decorators: [
    StoreDecorator({
      user: {
        userData: {
          id: "38c8f3bf-f0bf-4ff4-8ef0-576a15baf44f",
          username: "123",
        },
      },
      chat: {
        messagesWithUser: [
          {
            recipientId: "f1b46d49-077e-4545-8cc8-9c0d9d1e16da",
            senderId: "38c8f3bf-f0bf-4ff4-8ef0-576a15baf44f",
            content: "Привет",
          },
          {
            recipientId: "38c8f3bf-f0bf-4ff4-8ef0-576a15baf44f",
            senderId: "f1b46d49-077e-4545-8cc8-9c0d9d1e16da",
            content: "Привет!",
          },
        ],
      },
    }),
  ],
};
export const UserNotSelected: Story = {
  args: {
    recipientId: "",
  },
  decorators: [
    StoreDecorator({
      user: {
        userData: {
          id: "38c8f3bf-f0bf-4ff4-8ef0-576a15baf44f",
          username: "123",
        },
      },
    }),
  ],
};
