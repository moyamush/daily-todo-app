"use client";
import { FC } from "react";
import LoginForm from "./_components/LoginForm";
import Link from "next/link";

/**
 * ログインページ
 */
const Page: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <LoginForm />
      </div>
    </>
  );
};

export default Page;
