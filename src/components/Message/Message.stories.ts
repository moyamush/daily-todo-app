import { Meta, StoryObj } from "@storybook/nextjs";
import { Message } from "./Message";

const meta = {
  component: Message,
  title: "Components/Message",
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    message: "success message",
    type: "default",
  },
};

export const Error: Story = {
  args: {
    message: "error message",
    type: "destructive",
  },
};
