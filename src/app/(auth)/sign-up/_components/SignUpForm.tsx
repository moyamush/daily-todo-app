import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { useSignUpForm } from "../_hooks/use-sign-up-form";
import { Message } from "@/components/Message/Message";

/**
 * サインアップフォーム
 */
export function SignUpForm() {
  const { form, handleSignUp, message } = useSignUpForm();
  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>サインアップ</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignUp)}>
            <TextField
              name="email"
              type="text"
              label="メールアドレス"
              control={form.control}
              className="mb-3"
            />
            <TextField
              name="password"
              type="password"
              label="パスワード"
              control={form.control}
              className="mb-3"
            />
            {message && <Message message={message} type="destructive" />}
            <Button type="submit" size="lg" className="w-full">
              サインアップ
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
