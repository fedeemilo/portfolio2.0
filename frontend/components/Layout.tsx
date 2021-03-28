import React from "react";
import Head from "next/head";
import { NavBar } from "./NavBar";

interface LayoutProps {
  children: any;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Milo Portfolio</title>
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
      </Head>

      <div>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default Layout;
