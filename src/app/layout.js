import CommonLayout from "@/components/common-layout";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HireHub",
  description: "Find your dream JOB",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Suspense fallback={<Loading />}>
            <CommonLayout
              attribute="class"
              defaultTheme="system"
              children={children}
            />
          </Suspense>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
