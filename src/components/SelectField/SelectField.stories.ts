import type { Meta, StoryObj } from "@storybook/react";
import { withForm } from "@/components/StorybookWithForm";
import { z } from "zod";
import { SelectField, SelectOption } from "./SelectField";

const schema = z.object({
  example: z.string().min(1, { message: "選択してください" }),
});

type FormSchema = z.infer<typeof schema>;

const defaultValues: FormSchema = {
  example: "",
};

const meta = {
  component: SelectField,
  title: "Components/SelectField",
  tags: ["autodocs"],
} satisfies Meta<typeof SelectField<FormSchema>>;

export default meta;
type Story = StoryObj<typeof SelectField<FormSchema>>;

const defaultSelectOptions: SelectOption[] = [
  { label: "example1", value: "value1" },
  { label: "example2", value: "value2" },
  { label: "example3", value: "value3" },
];

export const Default: Story = {
  args: {
    name: "example",
    label: "example",
    selectOptions: defaultSelectOptions,
  },
  decorators: [withForm(defaultValues, schema)],
};

const labelColoeSelectOptions: SelectOption[] = [
  { label: "example1", labelColor: "bg-blue-100", value: "value1" },
  { label: "example2", labelColor: "bg-yellow-100", value: "value2" },
  { label: "example3", labelColor: "bg-green-100", value: "value3" },
  { label: "example4", labelColor: "bg-pink-100", value: "value4" },
];

export const LabelColor: Story = {
  args: {
    name: "example",
    label: "example",
    selectOptions: labelColoeSelectOptions,
  },
  decorators: [withForm(defaultValues, schema)],
};
