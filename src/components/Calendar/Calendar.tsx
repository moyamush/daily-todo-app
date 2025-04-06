import { Dispatch, FC, SetStateAction } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/style.css";
import { ja } from "react-day-picker/locale";

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
  const defaultClassNames = getDefaultClassNames();
  return (
    <DayPicker
      animate
      mode="single"
      locale={ja}
      selected={selected}
      onSelect={onSelected}
      showOutsideDays
      className={className}
      classNames={{
        root: `${defaultClassNames.root} text-[32px]`,
        day: `${defaultClassNames.day} p-5`,
        today: "",
        selected: "bg-primary text-primary-foreground rounded-lg",
        caption_label: `${defaultClassNames.caption_label} text-[44px]`,
        month_caption: `${defaultClassNames.month_caption} mb-5`,
        weekdays: `${defaultClassNames.weekdays} bg-primary text-primary-foreground`,
        nav: `${defaultClassNames.nav} scale-200 pr-3 text-primary`,
        chevron: "",
      }}
    />
  );
};

export default Calendar;
