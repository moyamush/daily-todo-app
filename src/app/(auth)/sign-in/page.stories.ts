import { Meta, StoryObj } from "@storybook/react";
import page from "./page";

const meta = {
  component: page,
  title: "Page/Login",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof page>;

export default meta;
type Story = StoryObj<typeof page>;

export const Default: Story = {};
