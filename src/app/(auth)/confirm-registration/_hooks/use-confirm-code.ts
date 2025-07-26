import { useForm } from "react-hook-form";
import {
  confirmCodeSchema,
  ConfirmCodeSchema,
} from "../_schemas/confirm-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useUserStore } from "@/stores/user-store";

/**
 * 確認コード入力カスタムフック
 */
export const useConfirmCode = () => {
  // フォーム初期化
  const form = useForm<ConfirmCodeSchema>({
    resolver: zodResolver(confirmCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const router = useRouter();

  const user = useUserStore((state) => state.user);

  // メッセージ
  const [message, setMessage] = useState<string | null>(null);

  // 確認コード登録
  const handleConfirmCode = async (
    formData: ConfirmCodeSchema,
  ): Promise<void> => {
    if (!user) {
      setMessage("ユーザが存在していません");
      return;
    }
    try {
      await new Promise<void>((resolve, reject) => {
        user.confirmRegistration(formData.code, true, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }
          resolve();
        });
      });
      router.push("/sign-in");
    } catch (err) {
      console.error(err);
      setMessage("メールアドレスの検証に失敗しました");
    }
  };

  return {
    form,
    handleConfirmCode,
    message,
  };
};
