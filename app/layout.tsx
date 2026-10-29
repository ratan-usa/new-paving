import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paving Risers Company | Raise covers to grade. Skip the excavation.",
  description:
    "Manhole, catch basin and valve box risers that sit in the frame already in the road. Lift the cover, set the riser, pave the same day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}

