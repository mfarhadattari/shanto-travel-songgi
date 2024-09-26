"use client";
import { CSSProperties, ReactNode } from "react";
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
  style?: CSSProperties;
} & TFormConfig;

const STForm = ({ formSubmit, children, defaultValues, style }: TSTForm) => {
  const formConfig: TFormConfig = {};

  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
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
