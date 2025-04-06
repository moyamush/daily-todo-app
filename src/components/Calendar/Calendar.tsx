import { Dispatch, FC, SetStateAction } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

interface CalendarProps {
  // 選択中の日付
  selected: Date | undefined;
  // 選択中の日付のコールバック関数
  onSelected: Dispatch<SetStateAction<Date | undefined>>;
  // CSSクラス
  className?: string;
}

/**
 * カレンダーコンポーネント
 */
const Calendar: FC<CalendarProps> = ({ selected, onSelected, className }) => {
  return (
    <DayPicker
      animate
      mode="single"
      selected={selected}
      onSelect={onSelected}
      // footer={
      //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
      // }
      className={className}
    />
  );
};

export default Calendar;
