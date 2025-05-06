"use client";
import { Calendar } from "@/components/Calendar/Calendar";
import CreateTodo from "@/components/CreateTodo/CreateTodo";
import { TodoTable } from "@/components/TodoTable/TodoTable";
import { useLogout } from "@/hooks/use-logout";
import { useAppStore } from "@/providers/store-provider";
import { format } from "date-fns";
import { FC } from "react";

/**
 * メインページ
 */
const Page: FC = () => {
  // 選択中の日付
  const { selectedDate, setSelectedDate } = useAppStore((state) => state);

  return (
    <>
      <div className="flex p-4 gap-10">
        <Calendar
          selected={selectedDate}
          onSelected={setSelectedDate}
          className="rounded-md"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="my-3 text-4xl font-bold">
              {format(selectedDate ?? new Date(), "yyyy/MM/dd")}のTODO一覧
            </div>
            <CreateTodo />
          </div>
          <TodoTable />
        </div>
      </div>
    </>
  );
};

export default Page;
