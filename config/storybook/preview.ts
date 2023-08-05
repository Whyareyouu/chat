import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StoryDerocator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StyleDecorator, StoreDecorator({})],
};

export default preview;
