import { Meta, StoryObj } from "@storybook/react";
import { Task, TodoTable } from "./TodoTable";

const meta = {
  component: TodoTable,
  title: "Components/TodoTable",
  tags: ["autodocs"],
} satisfies Meta<typeof TodoTable>;

export default meta;
type Story = StoryObj<typeof TodoTable>;

const defaultTasks: Task[] = [
  {
    id: 1,
    taskName: "デフォルトタスク1",
    tag: "プログラミング",
    duration: 60,
    status: "未処理",
  },
  {
    id: 2,
    taskName: "デフォルトタスク2",
    tag: "プログラミング",
    duration: 45,
    status: "処理中",
  },
];

export const Default: Story = {
  args: {
    tasks: defaultTasks,
  },
};
