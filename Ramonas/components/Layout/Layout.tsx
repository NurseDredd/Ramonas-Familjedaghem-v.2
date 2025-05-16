import { Header } from "../Header/Header";
import BackToTopBtn from "../BackToTopBtn/BackToTopBtn";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <BackToTopBtn />
    </>
  );
}
