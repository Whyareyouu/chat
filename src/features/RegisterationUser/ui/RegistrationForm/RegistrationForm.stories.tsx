import type { Meta, StoryObj } from "@storybook/react";
import { RegistrationForm } from "features/RegisterationUser";

const meta = {
  title: "features/RegistrationForm",
  component: RegistrationForm,
  tags: ["autodocs"],
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
