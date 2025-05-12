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
import { useEditTodo } from "./use-edit-todo";
import { TextField } from "../TextField/TextField";
import { Form } from "../ui/form";
import { SelectField } from "../SelectField/SelectField";

/**
 * TODO編集コンポーネント
 */
const EditTodo: FC = () => {
  const {
    form,
    tagOptions,
    statusOptions,
    handleEditTodo,
    editOpen,
    handleEditOpenChange,
  } = useEditTodo();
  return (
    <Dialog open={editOpen} onOpenChange={handleEditOpenChange}>
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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleEditTodo)}>
            <TextField
              name="taskName"
              type="text"
              label="タスク名"
              control={form.control}
              className="mb-3"
            />
            <SelectField
              name="tag"
              label="タグ"
              selectOptions={tagOptions}
              control={form.control}
              className="mb-3"
            />
            <TextField
              name="duration"
              type="text"
              label="所要時間"
              control={form.control}
              className="mb-3"
            />
            <SelectField
              name="status"
              label="ステータス"
              selectOptions={statusOptions}
              control={form.control}
              className="mb-3"
            />
            <DialogFooter className="sm:justify-between">
              <DialogClose asChild>
                <Button type="button" variant="secondary">
                  閉じる
                </Button>
              </DialogClose>
              <Button type="submit">編集</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default EditTodo;
