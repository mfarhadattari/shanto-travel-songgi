"use client";
import { store } from "@/redux/store";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import theme from "../theme";
import { ThemeProvider } from "@mui/material";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </AppRouterCacheProvider>
    </Provider>
  );
}
