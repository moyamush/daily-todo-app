import { useRouter } from "next/navigation";
import {
  loginFormSchema,
  LoginFormSchema,
} from "../_schemas/login-form-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userPool } from "@/lib/aws/cognito";
import { useState } from "react";
import { useAppStore } from "@/providers/store-provider";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";

/**
 * ログインページカスタムフック
 */
export const useLoginForm = () => {
  // フォーム初期化
  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const { setUser } = useAppStore((state) => state);

  // JWTトークン
  const { setToken } = useAppStore((state) => state);

  // メッセージ
  const [message, setMessage] = useState<string | null>(null);

  // ログイン
  const handleLogin = async (formData: LoginFormSchema) => {
    console.log(formData);

    const user = new CognitoUser({
      Username: formData.email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: formData.email,
      Password: formData.password,
    });

    try {
      await new Promise((resolve, reject) => {
        user.authenticateUser(authDetails, {
          onSuccess: (result) => {
            const token = result.getAccessToken().getJwtToken();
            setToken(token);
            setUser(user);
            resolve(token);
          },
          onFailure: (err) => {
            reject(err);
          },
          newPasswordRequired: () => {
            console.log("パスワードの変更が必要です");
            setUser(user);
            router.push("/new-change-password");
          },
        });
      });
      router.push("/");
    } catch (err) {
      console.log(err);
      setMessage(
        "ログインに失敗しました。IDまたはパスワードを確認してください。",
      );
    }
  };

  return {
    form,
    handleLogin,
    message,
  };
};
