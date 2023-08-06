import type { Preview } from "@storybook/react";
import { StyleDecorator } from "../../src/shared/config/storybook/StyleDecorator/StoryDerocator";
import { StoreDecorator } from "../../src/shared/config/storybook/StoreDecorator/StoreDecorator";
import { RouteDecorator } from "../../src/shared/config/storybook/RouteDecorator/RouteDecorator";

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
  decorators: [StyleDecorator, StoreDecorator({}), RouteDecorator],
};

export default preview;
