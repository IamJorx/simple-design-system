import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ColorModeProvider } from "./contexts/ColorModeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design System - Button Components",
  description: "Design System component library with color mode support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('color-mode');
                  if (mode && ['sds-light', 'sds-dark', 'brand-b-light'].includes(mode)) {
                    document.documentElement.setAttribute('data-color-mode', mode);
                  } else {
                    document.documentElement.setAttribute('data-color-mode', 'sds-light');
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-color-mode', 'sds-light');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ColorModeProvider>
          {children}
        </ColorModeProvider>
      </body>
    </html>
  );
}
