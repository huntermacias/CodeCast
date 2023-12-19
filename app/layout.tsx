import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { dark } from "@clerk/themes";
import { Toaster } from 'sonner'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGen Stream Platform",
  description:
    "NextGen Stream Platform – A cutting-edge, feature-rich streaming application, crafted with the latest web technologies for an unparalleled streaming experience. Powered by Create Next App.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            forcedTheme="dark"
            storageKey="gamehub-theme"
          >
            <Toaster theme="dark" position="bottom-center" />
            {children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
