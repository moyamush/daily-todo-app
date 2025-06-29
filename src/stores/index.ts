import { CognitoUser } from "amazon-cognito-identity-js";
import { createStore } from "zustand/vanilla";

export type AppState = {
  user: CognitoUser | null;
  token: string | unknown | null;
  selectedDate: Date;
};

export type AppActions = {
  setUser: (user: CognitoUser | undefined) => void;
  getUser: () => CognitoUser | null;
  setToken: (newToken: string | unknown | null) => void;
  setSelectedDate: (newDate: Date) => void;
  isAuthenticated: () => boolean;
};

export type AppStore = AppState & AppActions;

export const initAppStore = (): AppState => {
  return { user: null, token: null, selectedDate: new Date() };
};

export const defaultInitState: AppState = {
  user: null,
  token: null,
  selectedDate: new Date(),
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set, get) => ({
    ...initState,
    setUser: (user) => set(() => ({ user })),
    getUser: () => {
      return get().user;
    },
    setToken: (newToken) => set(() => ({ token: newToken })),
    setSelectedDate: (newDate) => set(() => ({ selectedDate: newDate })),
    isAuthenticated: () => {
      const token = get().token;
      return token !== null && typeof token === "string";
    },
    clear: () => {
      set(() => ({ user: null }));
      set(() => ({ token: null }));
    },
  }));
};
