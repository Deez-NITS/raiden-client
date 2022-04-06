import { Fragment, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { connect } from "react-redux";
import { registerUser } from "./Global/Redux/Actions";

import { Navbar, Footer } from "./Components";
import { Auth, Home } from "./Pages";

import "./App.scss";

const App = ({ auth, registerUser }) => {
  console.log(auth);
  useEffect(() => {
    registerUser({
      name: "Pratik Majumdar",
      email: "info.pratikmajumdar@gmail.com",
      phoneNo: "3875927859",
      password: "pratik2002",
    });
  }, []);
  return (
    <Fragment>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
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
