import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface TextFieldProps {
  // inputのタイプ
  type: string;
  // ラベル
  label: string;
  //プレースホルダー
  placeholder?: string;
}
export function TextField({ type, label, placeholder }: TextFieldProps) {
  return (
    <div>
      <Label htmlFor={label} className="m-2 bold">
        {label}
      </Label>
      <Input id={label} type={type} placeholder={placeholder ?? label} />
    </div>
  );
}
