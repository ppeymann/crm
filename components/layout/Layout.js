import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <h2>CRM</h2>
        <Link href="/add-customer">Add customer</Link>
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        CRM that made with
        <a href="https://peyman-malek.netlify.app" target="_blank">
          {" "}
          Peyman Malek
        </a>
      </footer>
    </>
  );
};

export default Layout;
