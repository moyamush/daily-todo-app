import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";

// セレクトオプションのインターフェース
export interface SelectOption {
  // ラベル
  label: string;
  // ラベルカラー
  labelColor?: string;
  // 値
  value: string;
}

// セレクトフィールドのインターフェース
interface SelectFieldProps<T extends FieldValues> {
  // フォームフィールド名
  name: Path<T>;
  // ラベル
  label: string;
  //プレースホルダー
  placeholder?: string;
  // セレクトのリスト
  selectOptions: SelectOption[];
  // フォームコントロール
  control: Control<T>;
  // CSSクラス
  className?: string;
}

/**
 * セレクトフィールドコンポーネント
 */
export function SelectField<T extends FieldValues>({
  name,
  label,
  placeholder,
  selectOptions = [],
  control,
  className,
}: SelectFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="bold">{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder ?? label} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {selectOptions.length > 0 &&
                    selectOptions.map((item) => {
                      return (
                        <SelectItem key={item.value} value={item.value}>
                          {item.labelColor && (
                            <Badge
                              className={`${item.labelColor ?? "bg-white"} text-black`}
                            >
                              {item.label}
                            </Badge>
                          )}
                          {!item.labelColor && item.label}
                        </SelectItem>
                      );
                    })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <div className="min-h-5">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
