import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "./Calendar";

const meta = {
  component: Calendar,
  title: "Components/Calendar",
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = () => {
  const [selected, setSelected] = useState<Date | undefined>(new Date());
  return <Calendar selected={selected} onSelected={setSelected} />;
};
