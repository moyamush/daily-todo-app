import { Meta } from "@storybook/nextjs";
import { useState } from "react";
import { Calendar } from "./Calendar";

const meta = {
  component: Calendar,
  title: "Components/Calendar",
  tags: ["autodocs"],
} satisfies Meta<typeof Calendar>;

export default meta;

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  return <Calendar selectedDate={selectedDate} onSelected={setSelectedDate} />;
};
