"use client";

import { FC } from "react";
import SignUpForm from "./_components/SignUpForm";

/**
 * サインアップページ
 */
const Page: FC = () => {
  return (
    <>
      <div className="flex justify-center mt-10">
        <SignUpForm />
      </div>
    </>
  );
};

export default Page;
