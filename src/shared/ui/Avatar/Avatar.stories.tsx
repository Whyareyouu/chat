import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarSize } from "shared/ui/Avatar/Avatar";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AvatarSizeM: Story = {
  args: {
    size: AvatarSize.M,
  },
};
export const AvatarSizeL: Story = {
  args: {
    size: AvatarSize.L,
  },
};
export const AvatarSizeXL: Story = {
  args: {
    size: AvatarSize.XL,
  },
};
