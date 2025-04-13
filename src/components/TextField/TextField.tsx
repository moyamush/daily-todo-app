"use client";
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
  // CSSクラス
  className?: string;
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
  className,
}: TextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="bold">{label}</FormLabel>
          <FormControl>
            <Input
              id={label}
              type={type}
              placeholder={placeholder ?? label}
              {...field}
            />
          </FormControl>
          <div className="min-h-5">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
