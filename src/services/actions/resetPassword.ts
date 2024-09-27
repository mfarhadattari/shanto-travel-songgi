"use server";

import config from "@/config";

type TPayload = {
  email: string;
  token: string;
  password: string;
};

const resetPassword = async (payload: TPayload) => {
  const res = await fetch(
    `${config.base_api}/auth/reset-password?email=${payload.email}&token=${payload.token}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ password: payload.password }),
      cache: "no-store",
    },
  );
  return await res.json();
};

export default resetPassword;
