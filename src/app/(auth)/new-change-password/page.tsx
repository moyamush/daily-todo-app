"use client";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { FC } from "react";
import { NewChangePasswordForm } from "./_components/NewChangePasswordForm";

/**
 * パスワード変更ページ
 */
const Page: FC = () => {
  return (
    <>
      <PageTitle title="初回パスワード変更" />
      <div className="flex justify-center mt-10">
        <NewChangePasswordForm />
      </div>
    </>
  );
};

export default Page;
