"use server";

import config from "@/config";
import { FieldValues } from "react-hook-form";

const forgetPassword = async (payload: FieldValues) => {
  const res = await fetch(`${config.base_api}/auth/forget-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  return await res.json();
};

export default forgetPassword;
