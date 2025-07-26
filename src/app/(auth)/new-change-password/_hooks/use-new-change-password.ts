import { useForm } from "react-hook-form";
import {
  newChangePasswordSchema,
  NewChangePasswordSchema,
} from "../_schemas/new-change-password-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user-store";

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

  const user = useUserStore((state) => state.user);

  // 初回パスワード変更
  const handleNewChangePassword = async (formData: NewChangePasswordSchema) => {
    try {
      user?.completeNewPasswordChallenge(
        formData.password,
        {},
        {
          onSuccess: () => {
            router.push("sign-in");
          },
          onFailure: (err) => {
            console.error(err);
          },
        },
      );
    } catch (err) {
      console.error(err);
    }
  };
  return {
    form,
    handleNewChangePassword,
  };
};
