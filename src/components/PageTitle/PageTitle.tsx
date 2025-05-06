"use client";
interface PageTitleProps {
  // ページタイトル
  title: string;
}

/**
 * ページタイトルコンポーネント
 */
export function PageTitle({ title }: PageTitleProps) {
  return <div className="m-3 font-bold text-3xl">{title}</div>;
}
