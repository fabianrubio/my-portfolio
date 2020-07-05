import React from "react";
import Helmet from "./helmet";
import Header from "./header";
import Midsection from "./midsection";
import Footer from "./footer";
import "./style.scss";

const Layout = () => {
  return (
    <>
      <Helmet />
      <Header />
      <Midsection />
      <Footer />
    </>
  );
};

export default Layout;
