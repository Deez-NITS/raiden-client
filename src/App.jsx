import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { connect } from "react-redux";

import { Navbar, Footer, Loader } from "./Components";
import { Auth, Home, Register } from "./Pages";

import "./App.scss";

const App = ({ auth }) => {
  console.log(auth);

  const isLoggedIn = true;

  if (auth.loading) {
    return <Loader />;
  }

  return (
    <Fragment>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        {!auth.isAuthenticated ? (
          <Route path="/login" element={<Auth />} />
        ) : (
          <Route path="/login" element={<Navigate replace to={"/"} />} />
        )}
        {!auth.isAuthenticated ? (
          <Route path="/register" element={<Register />} />
        ) : (
          <Route path="/register" element={<Navigate replace to={"/"} />} />
        )}
      </Routes>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(App);
