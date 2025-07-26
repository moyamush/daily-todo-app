import { Meta, StoryObj } from "@storybook/nextjs";
import { NewChangePasswordForm } from "./NewChangePasswordForm";

const meta = {
  component: NewChangePasswordForm,
  title: "Components/NewChangePasswordForm",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof NewChangePasswordForm>;

export default meta;
type Story = StoryObj<typeof NewChangePasswordForm>;

export const Default: Story = {};
