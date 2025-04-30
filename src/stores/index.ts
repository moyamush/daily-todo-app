import { createStore } from "zustand/vanilla";

export type AppState = {
  selectedDate: Date;
};

export type AppActions = {
  setSelectedDate: (newDate: Date) => void;
};

export type AppStore = AppState & AppActions;

export const initAppStore = (): AppState => {
  return { selectedDate: new Date() };
};

export const defaultInitState: AppState = {
  selectedDate: new Date(),
};

export const createAppStore = (initState: AppState = defaultInitState) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setSelectedDate: (newDate) =>
      set(() => ({
        selectedDate: newDate,
      })),
  }));
};
