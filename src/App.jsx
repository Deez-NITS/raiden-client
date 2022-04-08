import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { connect } from "react-redux";

import { Navbar, Footer, Loader } from "./Components";
import {
  Auth,
  Home,
  Register,
  Verify,
  Landing,
  Flight,
  Sellers,
} from "./Pages";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const App = ({ auth, alert }) => {
  const isLoggedIn = true;

  console.log(auth);

  if (auth.loading) {
    return <Loader />;
  }

  useEffect(() => {
    console.log(alert);
    if (alert.length) {
      alert.forEach((alt) => {
        if (alt.type === "danger") {
          toast.error(alt.message, { autoClose: 5000 });
        } else {
          toast.success(alt.message, { autoClose: 5000 });
        }
      });
    }
  }, [alert]);

  return (
    <Fragment>
      {isLoggedIn && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        {!auth.isAuthenticated || !auth.otpVerified ? (
          <Fragment>
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
          </Fragment>
        ) : (
          <Fragment>
            <Route path="/login" element={<Navigate replace to={"/home"} />} />
            <Route
              path="/register"
              element={<Navigate replace to={"/home"} />}
            />
            <Route path="/verify" element={<Navigate replace to={"/home"} />} />
          </Fragment>
        )}

        <Route path="/sellers/:airportId" element={<Sellers />} />
        <Route path="/flight" element={<Flight />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  alert: state.alert,
});

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps)(App);
