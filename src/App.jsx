import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./Components";
import { Auth, Home, Flight } from "./Pages";

import "./App.scss";

const App = () => {
  const isLoggedIn = true;

  return (
    <Fragment>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
