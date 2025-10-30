import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
// import { RedirectToast } from "@/components/redirectToast";

export const metadata: Metadata = {
  title: "Ticket management",
  description: "A simple ticket management app built with Next.js 13, Prisma and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Header />
          <main className="flex flex-col flex-1 py-24 px-8 min-h-screen overflow-y-auto overflow-x-hidden bg-secondary/20">
            {children}
          </main>
          <Toaster expand />
        </ThemeProvider>
        {/* <RedirectToast /> */}

      </body>
    </html>
  );
}
