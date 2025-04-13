"use client";
import { Form } from "@/components/ui/form";
import { FC } from "react";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLoginForm } from "../_hooks/useLoginForm";

/**
 * ログインフォーム
 */
const LoginForm: FC = () => {
  const { form, handleLogin } = useLoginForm();

  return (
    <Card className="w-1/2">
      <CardHeader>
        <CardTitle>ログイン</CardTitle>
      </CardHeader>{" "}
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleLogin)}>
            <TextField
              name="loginId"
              type="text"
              label="ログインID"
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
            <Button type="submit" size="lg" className="w-full">
              ログイン
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
