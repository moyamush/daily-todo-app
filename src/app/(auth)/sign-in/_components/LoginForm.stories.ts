import { Meta, StoryObj } from "@storybook/nextjs";
import LoginForm from "./LoginForm";

const meta = {
  component: LoginForm,
  title: "Components/LoginForm",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
