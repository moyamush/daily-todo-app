import { useAuthStore } from "@/stores/auth-store";
import { useUserStore } from "@/stores/user-store";
import { useRouter } from "next/navigation";

/**
 * ログアウトカスタムフック
 */
export const useLogout = () => {
  const router = useRouter();

  const clearToken = useAuthStore((state) => state.clearToken);
  const clearUser = useUserStore((state) => state.clearUser);

  // ログアウト
  const handleLogout = () => {
    clearToken();
    clearUser();
    router.push("/sign-in");
  };

  return {
    handleLogout,
  };
};
