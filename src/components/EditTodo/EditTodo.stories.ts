import { Meta, StoryObj } from "@storybook/react";
import EditTodo from "./EditTodo";

const meta = {
  component: EditTodo,
  title: "Components/EditTodo",
  tags: ["autodocs"],
} satisfies Meta<typeof EditTodo>;

export default meta;
type Story = StoryObj<typeof EditTodo>;

export const Default: Story = {};
