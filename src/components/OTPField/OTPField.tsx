"use client";
import { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

/**
 * OTPフィールドコンポーネントインターフェース
 */
interface OTPFieldProps<T extends FieldValues> {
  // フォームフィールド名
  name: Path<T>;
  // ラベル
  label?: string;
  //プレースホルダー
  placeholder?: string;
  // フォームコントロール
  control: Control<T>;
  // CSSクラス
  className?: string;
}

/**
 * OTPフィールドコンポーネント
 */
export function OTPField<T extends FieldValues>({
  name,
  label,
  control,
  className,
}: OTPFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="bold">{label}</FormLabel>
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-12" />
                <InputOTPSlot index={1} className="w-12 h-12" />
                <InputOTPSlot index={2} className="w-12 h-12" />
                <InputOTPSlot index={3} className="w-12 h-12" />
                <InputOTPSlot index={4} className="w-12 h-12" />
                <InputOTPSlot index={5} className="w-12 h-12" />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <div className="min-h-5">
            <FormMessage />
          </div>
        </FormItem>
      )}
    />
  );
}
