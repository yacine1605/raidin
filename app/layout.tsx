import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: '"Raidin — Application de Depannage sur Android',
  description:
    '"Raidin, votre application de Depannage sur Android. Réservez un depannage en quelques minutes, suivez votre trajet en temps réel, paiements sécurisés.",',
  generator: "DigitservZ",
  openGraph: {
    images: ["/r.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
