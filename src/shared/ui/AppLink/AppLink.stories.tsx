import type { Meta, StoryObj } from "@storybook/react";
import { AppLink } from "shared/ui/AppLink/AppLink";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "link",
    to: "/",
  },
};
