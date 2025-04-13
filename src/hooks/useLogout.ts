import { useRouter } from "next/navigation";

/**
 * ログアウトカスタムフック
 */
export const useLogout = () => {
  const router = useRouter();

  // ログアウト
  const handleLogout = () => {
    router.push("/sign-in");
  };

  return {
    handleLogout,
  };
};
