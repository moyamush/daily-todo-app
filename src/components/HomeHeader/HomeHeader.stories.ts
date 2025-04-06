import { Meta, StoryObj } from "@storybook/react";
import HomeHeader from "./HomeHeader";
import { fn } from "@storybook/test";

const meta = {
  component: HomeHeader,
  title: "Components/HomeHeader",
  tags: ["autodocs"],
  args: {
    onLogout: fn(),
  },
} satisfies Meta<typeof HomeHeader>;

export default meta;
type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {};
