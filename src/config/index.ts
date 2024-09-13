const config = {
  app_name: (process.env.APP_NAME ||
    process.env.NEXT_PUBLIC_APP_NAME) as string,
  base_api: (process.env.BASE_API ||
    process.env.NEXT_PUBLIC_BASE_API) as string,
};

export default config;
