import type { Meta, StoryObj } from "@storybook/react";
import { AuthType, AuthTypeSwitcher } from "widgets/AuthTypeSwitcher";

const meta = {
  title: "widgets/AuthTypeSwitcher",
  component: AuthTypeSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AuthTypeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    handleChangeModeToReg: () => {},
    handleChangeModeToLogin: () => {},
    mode: AuthType.LOGIN,
  },
};
export const Registration: Story = {
  args: {
    handleChangeModeToReg: () => {},
    handleChangeModeToLogin: () => {},
    mode: AuthType.REGISTER,
  },
};
