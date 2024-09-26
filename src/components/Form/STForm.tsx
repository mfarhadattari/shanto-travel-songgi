"use client";
import { CSSProperties, ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resolver?: any;
};

type TSTForm = {
  formSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  style?: CSSProperties;
} & TFormConfig;

const STForm = ({
  formSubmit,
  children,
  defaultValues,
  style,
  resolver,
}: TSTForm) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  if (resolver) {
    formConfig["resolver"] = zodResolver(resolver);
  }

  const methods = useForm(formConfig);

  const { handleSubmit, reset } = methods;

  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    await formSubmit(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)} style={{ ...style }}>
        {children}
      </form>
    </FormProvider>
  );
};

export default STForm;
