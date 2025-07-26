import { create } from "zustand";

/**
 * トークンストアの状態
 */
type AuthState = {
  // トークン
  token: string | unknown | null;
  // トークン更新
  setToken: (newToken: string | unknown | null) => void;
  // トークンクリア
  clearToken: () => void;
};

/**
 * トークンストア
 */
export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  setToken: (newToken: string | unknown | null) =>
    set(() => ({ token: newToken })),
  clearToken: () => set(() => ({ token: null })),
}));
