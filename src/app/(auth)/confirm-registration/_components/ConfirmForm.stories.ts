import { Meta, StoryObj } from "@storybook/nextjs";
import { ConfirmForm } from "./ConfirmForm";

const meta = {
  component: ConfirmForm,
  title: "Components/ConfirmForm",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof ConfirmForm>;

export default meta;
type Story = StoryObj<typeof ConfirmForm>;

export const Default: Story = {};
