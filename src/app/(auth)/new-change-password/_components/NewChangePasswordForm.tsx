"use client";
import { FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TextField } from "@/components/TextField/TextField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useNewChangePassword } from "../_hooks/use-new-change-password";

/**
 * パスワード変更フォーム
 */
const NewChangePasswordForm: FC = () => {
  const { form, handleNewChangePassword } = useNewChangePassword();

  return (
    <Card className="w-1/2">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleNewChangePassword)}>
            <TextField
              name="password"
              type="password"
              label="パスワード"
              control={form.control}
              className="mb-3"
            />
            <Button type="submit" size="lg" className="w-full">
              パスワード変更
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default NewChangePasswordForm;
