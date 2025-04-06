import { Meta, StoryObj } from "@storybook/react";
import Calendar from "./Calendar";
import { action } from "@storybook/addon-actions";

const meta = {
  component: Calendar,
  title: "Components/Calendar",
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    selected: new Date(),
    onSelected: action("onSelected"),
  },
};
