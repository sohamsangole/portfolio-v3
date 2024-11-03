import localFont from "next/font/local";
import "./globals.css";

const roboto = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto",
  weight: "400",
});

export const metadata = {
  title: "Portfolio | Soham Sangole",
  description: "Portfolio version 4",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
