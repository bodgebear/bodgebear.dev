import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import StyledComponentsRegistry from "../components/StyledComponentsRegistry/StyledComponentsRegistry";
import { GlobalStyles } from "../components/GlobalStyles/GlobalStyles";

export const metadata: Metadata = {
  title: "Bodging Bear",
};

const pressStart2P = Press_Start_2P({
  weight: "400",
  display: "swap",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
