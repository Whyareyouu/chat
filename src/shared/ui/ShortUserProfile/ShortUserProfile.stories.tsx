import type { Meta, StoryObj } from "@storybook/react";
import { ShortUserProfile } from "shared/ui/ShortUserProfile/ShortUserProfile";

const meta = {
  title: "shared/ShortUserProfile",
  component: ShortUserProfile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShortUserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Whyareyou",
    lastMessage: "Привет!",
  },
};
