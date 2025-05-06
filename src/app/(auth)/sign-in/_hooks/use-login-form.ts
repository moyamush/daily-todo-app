import { useRouter } from "next/navigation";
import {
  loginFormSchema,
  LoginFormSchema,
} from "../_schemas/login-form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * ログインページカスタムフック
 */
export const useLoginForm = () => {
  // フォーム初期化
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  const router = useRouter();

  // ログイン
  const handleLogin = (formData: LoginFormSchema) => {
    console.log(formData);

    // ホームへリダイレクト
    router.push("/");
  };

  return {
    form,
    handleLogin,
  };
};
