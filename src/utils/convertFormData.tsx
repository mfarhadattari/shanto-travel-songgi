/* eslint-disable @typescript-eslint/no-explicit-any */
const convertFormData = (payload: any): FormData => {
  const obj = { ...payload };
  const file: Blob = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);

  const formData = new FormData();
  formData.append("data", data);
  formData.append("file", file);
  return formData;
};

export default convertFormData;
