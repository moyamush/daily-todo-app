"use client";
import { useAppStore } from "@/providers/store-provider";
import { Button } from "../ui/button";
import { format } from "date-fns";
import Link from "next/link";
import { BsCalendar2Date } from "react-icons/bs";

interface HomeHeaderProps {
  // ログアウトメソッド
  onLogout?: () => void;
}

/**
 * ホームヘッダーコンポーネント
 */
export function HomeHeader({ onLogout }: HomeHeaderProps) {
  const now = new Date();
  const today = format(now, "yyyy-MM-dd");
  const { isAuthenticated } = useAppStore((state) => state);

  return (
    isAuthenticated() && (
      <header className="w-full border-b px-6 py-4 flex items-center justify-between bg-white shadow-sm">
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">DailyTodoApp</Link>
        </div>

        <div className="text-xl text-muted-foreground space-x-4">
          <div className="flex items-center">
            <BsCalendar2Date />
            <span className="ml-2">{today}</span>
          </div>
        </div>
        <div className="flex gap-3">
          {/* <Button variant="outline" size="sm">
          <Link href="/settings">設定</Link>
        </Button> */}
          <Button variant="outline" size="sm" onClick={onLogout}>
            ログアウト
          </Button>
        </div>
      </header>
    )
  );
}
