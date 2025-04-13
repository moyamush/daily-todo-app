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

const EditTodo: FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>編集</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>タスクの編集</DialogTitle>
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

export default EditTodo;
