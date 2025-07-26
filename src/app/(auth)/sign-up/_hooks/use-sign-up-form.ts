import { useForm } from "react-hook-form";
import { signUpFormSchema, SignUpFormSchema } from "../_schemas/sign-up-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { userPool } from "@/lib/aws/cognito";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useState } from "react";
import { useUserStore } from "@/stores/user-store";

/**
 * サインアップカスタムフック
 */
export const useSignUpForm = () => {
  // フォーム初期化
  const form = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // メッセージ
  const [message, setMessage] = useState<string | null>(null);

  const router = useRouter();

  const { setUser } = useUserStore((state) => state);

  // サインアップ
  const handleSignUp = async (formData: SignUpFormSchema) => {
    try {
      // Cognitoのサインアップ
      const result = await new Promise<CognitoUser>((resolve, reject) => {
        userPool.signUp(
          formData.email,
          formData.password,
          [],
          [],
          (err, result) => {
            if (err || !result) {
              return reject(err);
            }
            resolve(result.user);
          },
        );
      });
      setUser(result);
      router.push("/confirm-registration");
    } catch (err) {
      console.log(err);
      setMessage("サインアップに失敗しました");
    }
  };

  return {
    form,
    handleSignUp,
    message,
  };
};
