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
import { useCreateTodo } from "./use-create-todo";
import { Form } from "../ui/form";
import { TextField } from "../TextField/TextField";
import { SelectField } from "../SelectField/SelectField";

/**
 * TODO追加コンポーネント
 */
const CreateTodo: FC = () => {
  const {
    form,
    tagOptions,
    statusOptions,
    handleCreateTodo,
    createOpen,
    handleCreateOpenChange,
  } = useCreateTodo();
  return (
    <Dialog open={createOpen} onOpenChange={handleCreateOpenChange}>
      <DialogTrigger asChild>
        <Button>新規追加</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>タスクの追加</DialogTitle>
          <DialogDescription>
            タスクの詳細を入力してください。
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateTodo)}>
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
              <Button type="submit">追加</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTodo;
