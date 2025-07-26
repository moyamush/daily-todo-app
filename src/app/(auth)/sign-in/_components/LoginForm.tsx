"use client";
import { Form } from "@/components/ui/form";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLoginForm } from "../_hooks/use-login-form";
import Link from "next/link";
import { Message } from "@/components/Message/Message";

/**
 * ログインフォーム
 */
export function LoginForm() {
  const { form, handleLogin, message } = useLoginForm();

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
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
              ログイン
            </Button>
          </form>
        </Form>
        <div className="flex justify-center mt-5">
          サインアップは
          <Link href="sign-up" className="text-red-500">
            こちら
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
