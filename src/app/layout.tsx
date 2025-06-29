"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { MSWProvider } from "@/providers/msw-provider";
import { StoreProvider } from "@/providers/store-provider";
import { HomeHeader } from "@/components/HomeHeader/HomeHeader";
import { useLogout } from "@/hooks/use-logout";
import { AuthProvider } from "@/providers/auth-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ログアウト
  const { handleLogout } = useLogout();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider>
          <MSWProvider>
            <AuthProvider>
              <HomeHeader onLogout={handleLogout} />
              {children}
            </AuthProvider>
          </MSWProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
