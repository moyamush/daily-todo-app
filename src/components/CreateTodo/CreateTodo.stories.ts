import { Meta, StoryObj } from "@storybook/react";
import CreateTodo from "./CreateTodo";

const meta = {
  component: CreateTodo,
  title: "Components/CreateTodo",
  tags: ["autodocs"],
} satisfies Meta<typeof CreateTodo>;

export default meta;
type Story = StoryObj<typeof CreateTodo>;

export const Default: Story = {};
