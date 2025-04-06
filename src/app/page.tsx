"use client";
import Calendar from "@/components/Calendar/Calendar";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <Calendar selected={date} onSelected={setDate} className="rounded-md" />
  );
}
