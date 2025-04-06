"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { BsCalendar2Date } from "react-icons/bs";

interface HomeHeaderProps {
  // ログアウトメソッド
  onLogout: () => void;
}

/**
 * ホームヘッダーコンポーネント
 */
const HomeHeader: FC<HomeHeaderProps> = ({ onLogout }) => {
  const now = new Date();
  const today = format(now, "yyyy-MM-dd");
  return (
    <header className="w-full border-b px-6 py-4 flex items-center justify-between bg-white shadow-sm">
      <div className="text-xl font-bold tracking-tight">DaliyTodoApp</div>

      <div className="text-sm text-muted-foreground space-x-4">
        <div className="flex items-center">
          <BsCalendar2Date />
          <span className="ml-2">{today}</span>
        </div>
      </div>

      <Button variant="outline" size="sm" onClick={onLogout}>
        ログアウト
      </Button>
    </header>
  );
};

export default HomeHeader;
