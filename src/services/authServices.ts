import { AUTHKEY } from "@/const/auth";
import { setToLocalStorage } from "@/utils/localStorate";

export const storeUserInfo = (accessToken: string) => {
  return setToLocalStorage(AUTHKEY, accessToken);
};
