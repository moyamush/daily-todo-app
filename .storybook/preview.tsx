import React from "react";
import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs";
import { initialize, mswLoader } from "msw-storybook-addon";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <Story />],
  loaders: [mswLoader],
};

export default preview;
