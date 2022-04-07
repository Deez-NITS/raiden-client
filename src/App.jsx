import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "./Global/Redux/Actions";

import { Navbar, Footer } from "./Components";
import { Auth, Home, Register } from "./Pages";

import "./App.scss";

const App = ({ auth, registerUser }) => {
  console.log(auth);

  const isLoggedIn = true;
  // const isLoggedIn = auth.isAuthenticated;

  return (
    <Fragment>
      {isLoggedIn && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registerUser: (user) => dispatch(registerUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
