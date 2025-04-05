import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface TextFieldProps<T extends FieldValues> {
  // フォームフィールド名
  name: Path<T>;
  // inputのタイプ
  type: string;
  // ラベル
  label: string;
  //プレースホルダー
  placeholder?: string;
  // フォームコントロール
  control: Control<T>;
}

/**
 * テキストフィールドコンポーネント
 */
export function TextField<T extends FieldValues>({
  name,
  type = "text",
  label,
  placeholder,
  control,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="m-1 bold">{label}</FormLabel>
          <FormControl>
            <Input
              id={label}
              type={type}
              placeholder={placeholder ?? label}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
