import "./globals.css";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `Ayush Raj`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
