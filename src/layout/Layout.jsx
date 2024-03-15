import Header from "../compoments/Header/Header";
import Footer from "../compoments/Footer/Footer";
import Router from "../routes/Router";

import React from 'react'

const Layout = () => {
  return (
    <>
    <Header/>
    <main>
      <Router/>
    </main>
    <Footer/>
    </>
  )
}

export default Layout

