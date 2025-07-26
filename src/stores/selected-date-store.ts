import { create } from "zustand";

/**
 * 選択中の日付ストアの状態
 */
type selectedDateState = {
  // 選択中の日付
  selectedDate: Date;
  // 選択中の日付更新
  setSelectedDate: (newDate: Date) => void;
};

/**
 * 選択中の日付ストア
 */
export const useSelectedDateStore = create<selectedDateState>((set) => ({
  selectedDate: new Date(),
  setSelectedDate: (newDate: Date) => set(() => ({ selectedDate: newDate })),
}));
