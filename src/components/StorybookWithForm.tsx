import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import {
  FormProvider,
  useForm,
  FieldValues,
  DefaultValues,
} from "react-hook-form";
import { ZodSchema } from "zod";

export function withForm<T extends FieldValues>(
  defaultValues: DefaultValues<T>,
  schema: ZodSchema<T>,
) {
  return (Story: () => ReactNode) => {
    const methods = useForm<T>({
      resolver: zodResolver(schema),
      defaultValues,
    });

    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) =>
            console.log("[submit]", data),
          )}
        >
          <Story />
          <Button type="submit" className="my-3 p-5 cursor-pointer">
            Submit
          </Button>
        </form>
      </FormProvider>
    );
  };
}
