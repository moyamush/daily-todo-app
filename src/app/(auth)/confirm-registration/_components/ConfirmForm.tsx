import { FC } from "react";
import { useConfirmCode } from "../_hooks/use-confirm-code";
import { Form } from "@/components/ui/form";
import { OTPField } from "@/components/OTPField/OTPField";
import { Button } from "@/components/ui/button";
import { Message } from "@/components/Message/Message";

/**
 * 確認コードフォーム
 */
const ConfirmForm: FC = () => {
  const { form, handleConfirmCode, message } = useConfirmCode();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleConfirmCode)}>
        <OTPField name="code" control={form.control} className="mb-3" />
        {message && <Message message={message} type="destructive" />}
        <Button type="submit" size="lg" className="w-full">
          確認
        </Button>
      </form>
    </Form>
  );
};

export default ConfirmForm;
