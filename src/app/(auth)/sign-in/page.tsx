"use client";
import { FC } from "react";
import LoginForm from "./_components/LoginForm";

/**
 * ログインページ
 */
const page: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <LoginForm />
      </div>
    </>
  );
};

export default page;
