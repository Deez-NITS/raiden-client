import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./Components";
import { Auth, Home } from "./Pages";

import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
