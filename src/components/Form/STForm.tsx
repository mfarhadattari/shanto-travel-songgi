"use client";
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, unknown>;
};

type TSTForm = {
  formSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
  defaultValues?: FieldValues;
} & TFormConfig;

const STForm = ({ formSubmit, children, defaultValues }: TSTForm) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  const { handleSubmit } = methods;

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    formSubmit(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submitHandler)}>{children}</form>
    </FormProvider>
  );
};

export default STForm;
