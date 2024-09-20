import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/libs/providers/Providers";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

export const metadata: Metadata = {
  title: "Shanto Travel Songgi",
  description: "A travels lovers community developed by DevMFarhad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body>
          {children}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            transition={Zoom}
            limit={1}
          />
        </body>
      </html>
    </Providers>
  );
}
