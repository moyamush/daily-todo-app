"use client";
import { Calendar } from "@/components/Calendar/Calendar";
import EditTodo from "@/components/EditTodo/EditTodo";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import { Task, TodoTable } from "@/components/TodoTable/TodoTable";
import { Button } from "@/components/ui/button";
import { useLogout } from "@/hooks/useLogout";
import { format } from "date-fns";
import { FC, useState } from "react";
import { IoMdAdd } from "react-icons/io";

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

/**
 * メインページ
 */
const Page: FC = () => {
  // ログアウト
  const { handleLogout } = useLogout();
  // 日付
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <HomeHeader onLogout={handleLogout} />
      <div className="flex p-4 gap-10">
        <Calendar selected={date} onSelected={setDate} className="rounded-md" />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="my-3 text-4xl font-bold">
              {format(date ?? new Date(), "yyyy/MM/dd")}のTODO一覧
            </div>
            <Button size="lg">
              <IoMdAdd />
              新規追加
            </Button>
          </div>
          <TodoTable tasks={tasks} />
        </div>
      </div>
    </>
  );
};

export default Page;
