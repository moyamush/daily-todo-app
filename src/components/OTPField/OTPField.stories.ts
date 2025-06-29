import { z } from "zod";
import { OTPField } from "./OTPField";
import { Meta, StoryObj } from "@storybook/nextjs";
import { withForm } from "../StorybookWithForm";

const schema = z.object({
  example: z.string().min(6, { message: "入力してください" }),
});

type FormSchema = z.infer<typeof schema>;

const defaultValues: FormSchema = {
  example: "",
};

const meta = {
  component: OTPField,
  title: "Components/OTPField",
  tags: ["autodocs"],
} satisfies Meta<typeof OTPField<FormSchema>>;

export default meta;
type Story = StoryObj<typeof OTPField<FormSchema>>;

export const Default: Story = {
  args: {
    name: "example",
    label: "example",
  },
  decorators: [withForm(defaultValues, schema)],
};
