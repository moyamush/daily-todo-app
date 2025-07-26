"use client";
import { Calendar } from "@/components/Calendar/Calendar";
import { CreateTodo } from "@/components/CreateTodo/CreateTodo";
import { TodoTable } from "@/components/TodoTable/TodoTable";
import useGetTodos from "@/hooks/use-get-todos";
import { useSelectedDateStore } from "@/stores/selected-date-store";
import { format } from "date-fns";
import { FC, useEffect } from "react";

/**
 * メインページ
 */
const Page: FC = () => {
  // 選択中の日付
  const selectedDate = useSelectedDateStore((state) => state.selectedDate);
  const setSelectedDate = useSelectedDateStore(
    (state) => state.setSelectedDate,
  );

  // TODO一覧
  const { todos, handleFetchTodo } = useGetTodos();

  useEffect(() => {
    if (selectedDate) {
      handleFetchTodo(selectedDate);
    }
  }, [selectedDate, handleFetchTodo]);

  return (
    <>
      <div className="flex p-4 gap-10">
        <Calendar
          selectedDate={selectedDate}
          onSelected={setSelectedDate}
          className="rounded-md"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="my-3 text-4xl font-bold">
              {format(selectedDate ?? new Date(), "yyyy/MM/dd")}のTODO一覧
            </div>
            <CreateTodo
              selectedDate={selectedDate}
              onCreated={handleFetchTodo}
            />
          </div>
          <TodoTable todos={todos} onFetchTodo={handleFetchTodo} />
        </div>
      </div>
    </>
  );
};

export default Page;
