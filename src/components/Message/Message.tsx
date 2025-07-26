import { Alert, AlertTitle } from "../ui/alert";

/**
 * メッセージコンポーネントインターフェース
 */
interface MessageProps {
  // メッセージ
  message: string;
  // メッセージタイプ
  type?: "default" | "destructive";
}

/**
 * メッセージコンポーネント
 */
export function Message({ message, type = "default" }: MessageProps) {
  const bgColor = type === "destructive" ? "bg-red-100" : "";
  return (
    <Alert variant={type} className={`${bgColor} mb-5`}>
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
}
