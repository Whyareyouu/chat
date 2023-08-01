import { Decorator } from "@storybook/react";
import GlobalStyles from "../../../../app/styles/styles";

export const StyleDecorator: Decorator = (Story) => (
  <>
    <GlobalStyles />
    <Story />
  </>
);
