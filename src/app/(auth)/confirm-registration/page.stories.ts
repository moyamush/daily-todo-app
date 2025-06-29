import { Meta, StoryObj } from "@storybook/nextjs";
import Page from "./page";

const meta = {
  component: Page,
  title: "Page/ConfirmRegistration",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof Page>;

export const Default: Story = {};
