"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useAppStore } from "./store-provider";

export interface AuthProviderProps {
  children: ReactNode;
}

/**
 * 認証プロバイダー
 */
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAppStore((state) => state);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/sign-in");
    }
  }, [isAuthenticated, router]);

  return <>{children}</>;
};
