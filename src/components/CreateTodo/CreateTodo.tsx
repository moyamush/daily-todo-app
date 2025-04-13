import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FC } from "react";
import { IoMdAdd } from "react-icons/io";

const CreateTodo: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg">
          <IoMdAdd />
          新規追加
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>タスクの追加</DialogTitle>
          <DialogDescription>
            タスクの詳細を編集してください。
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">test</div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              閉じる
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTodo;
