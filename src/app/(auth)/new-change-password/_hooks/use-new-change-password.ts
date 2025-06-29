import { useForm } from "react-hook-form";
import {
  newChangePasswordSchema,
  NewChangePasswordSchema,
} from "../_schemas/new-change-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/providers/store-provider";

/**
 * 初回パスワード変更カスタムフック
 */
export const useNewChangePassword = () => {
  // フォーム初期化
  const form = useForm<NewChangePasswordSchema>({
    resolver: zodResolver(newChangePasswordSchema),
    defaultValues: {
      password: "",
    },
  });

  const router = useRouter();

  const { user } = useAppStore((state) => state);

  // 初回パスワード変更
  const handleNewChangePassword = async (formData: NewChangePasswordSchema) => {
    try {
      user?.completeNewPasswordChallenge(
        formData.password,
        {},
        {
          onSuccess: () => {
            console.log("パスワード変更");
            router.push("sign-in");
          },
          onFailure: (err) => {
            console.log(err);
          },
        },
      );
    } catch (err) {}
  };
  return {
    form,
    handleNewChangePassword,
  };
};
