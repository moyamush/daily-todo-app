import React from "react";
import "../src/app/globals.css";
import type { Preview } from "@storybook/nextjs";
import { initialize, mswLoader } from "msw-storybook-addon";
import { StoreProvider } from "../src/providers/store-provider";

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
  decorators: [
    (Story) => (
      <StoreProvider>
        <Story />
      </StoreProvider>
    ),
  ],
  loaders: [mswLoader],
};

export default preview;
