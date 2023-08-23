import type { Meta, StoryObj } from "@storybook/react";
import { UserProfile } from "features/UserProfile";

const meta = {
  title: "features/UserProfile",
  component: UserProfile,
  tags: ["autodocs"],
} satisfies Meta<typeof UserProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
