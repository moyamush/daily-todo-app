"use client";

import { useAuthStore } from "@/stores/auth-store";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

/**
 * 認証プロバイダー
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const isAuthenticated = useAuthStore(
    (state) => state.token !== null && typeof state.token === "string",
  );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};
