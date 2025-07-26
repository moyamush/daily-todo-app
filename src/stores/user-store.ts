import { CognitoUser } from "amazon-cognito-identity-js";
import { create } from "zustand";

/**
 * ログイン中のユーザストア状態
 */
type UserState = {
  // ユーザ
  user: CognitoUser | undefined;
  // ユーザ取得
  getUser: () => CognitoUser | undefined;
  // ユーザ更新
  setUser: (user: CognitoUser | undefined) => void;
  // ユーザリセット
  clearUser: () => void;
};

/**
 * ログイン中のユーザストア
 */
export const useUserStore = create<UserState>((set, get) => ({
  user: undefined,
  getUser: () => get().user,
  setUser: (user: CognitoUser | undefined) => set(() => ({ user })),
  clearUser: () => set(() => ({ user: undefined })),
}));
