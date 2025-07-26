import { Meta, StoryObj } from "@storybook/nextjs";
import { SignUpForm } from "./SignUpForm";

const meta = {
  component: SignUpForm,
  title: "Components/SignUpForm",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof SignUpForm>;

export default meta;
type Story = StoryObj<typeof SignUpForm>;

export const Default: Story = {};
