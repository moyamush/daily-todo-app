"use client";
import { Calendar } from "@/components/Calendar/Calendar";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import { Task, TodoTable } from "@/components/TodoTable/TodoTable";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { format } from "date-fns";
import { useState } from "react";

const tasks: Task[] = [
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

export default function Home() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <>
      <HomeHeader />
      <ResizablePanelGroup direction="horizontal" className="gap-4 p-4">
        <ResizablePanel className="min-w-[35%]">
          <Calendar
            selected={date}
            onSelected={setDate}
            className="rounded-md"
          />
        </ResizablePanel>
        <ResizablePanel defaultSize={70}>
          <div className="my-3 text-4xl font-bold">
            {format(date ?? new Date(), "yyyy/MM/dd")}のTODO一覧
          </div>
          <TodoTable tasks={tasks} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}
