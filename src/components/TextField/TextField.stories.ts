import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./TextField";
import { withForm } from "@/components/StorybookWithForm";
import { z } from "zod";

const schema = z.object({
  example: z.string().min(1, {message: "入力してください"})
})

type FormSchema = z.infer<typeof schema>

const defaultValues: FormSchema = {
  example: ""
}

const meta = {
  component: TextField,
  title: "Components/TextField",
  tags: ["autodocs"],
} satisfies Meta<typeof TextField<FormSchema>>;

export default meta;
type Story = StoryObj<typeof TextField<FormSchema>>;

export const Default: Story = {
  args: {
    name: "example",
    type: "text",
    label: "example",
  },
  decorators: [withForm(defaultValues, schema)]
};
