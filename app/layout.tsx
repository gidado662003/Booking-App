"use client";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AppProvider } from "./context/page";
import { useAppContext } from "./context/page";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-4 md:px-32 py-2 ">
        <AppProvider>
          <LayoutComponent>{children}</LayoutComponent>
        </AppProvider>
      </body>
    </html>
  );
}

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useAppContext();

  return (
    <body
      className={`px-4 md:px-32 py-2  ${
        darkMode ? "bg-[#121212] text-white" : "bg-[#fffcfc]"
      } duration-[0.3s]`}
    >
      <NavBar />
      <main>{children}</main>
    </body>
  );
};
