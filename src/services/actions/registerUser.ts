"use server";

import config from "@/config";

const registerUser = async (fromData: FormData) => {
  const res = await fetch(`${config.base_api}/auth/register`, {
    method: "POST",
    body: fromData,
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};

export default registerUser;
