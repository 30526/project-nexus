import Navbar from "../components/Navbar/Navbar";
import React from "react";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router";
import Container from "../components/Container/Container";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <section>
          <Outlet></Outlet>
        </section>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
