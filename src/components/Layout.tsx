import { ReactNode } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <div>{children}</div>

      <Footer />
    </>
  );
}
