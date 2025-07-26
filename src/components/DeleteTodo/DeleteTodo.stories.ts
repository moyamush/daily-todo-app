import { Meta, StoryObj } from "@storybook/nextjs";
import { DeleteTodo } from "./DeleteTodo";

const meta = {
  component: DeleteTodo,
  title: "Components/DeleteTodo",
  tags: ["autodocs"],
} satisfies Meta<typeof DeleteTodo>;

export default meta;
type Story = StoryObj<typeof DeleteTodo>;

export const Default: Story = {};
