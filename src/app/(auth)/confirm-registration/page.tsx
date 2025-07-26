"use client";
import { PageTitle } from "@/components/PageTitle/PageTitle";
import { FC } from "react";
import { ConfirmForm } from "./_components/ConfirmForm";

/**
 * サインアップ確認ページ
 */
const Page: FC = () => {
  return (
    <>
      <PageTitle title="確認コード入力" />
      <div className="flex justify-center mt-10">
        <ConfirmForm />
      </div>
    </>
  );
};

export default Page;
