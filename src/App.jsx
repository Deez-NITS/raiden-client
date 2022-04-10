import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import { connect } from "react-redux";

import { loadUser } from "./Global/Redux/Actions";
import { Navbar, Footer, Loader } from "./Components";
import {
  Auth,
  Register,
  Verify,
  Landing,
  Flight,
  Sellers,
  Cart,
} from "./Pages";

import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

let fetched = false;

const App = ({ auth, alert, userLoad }) => {

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

  useEffect(() => {
    if (!fetched) {
      fetched = !fetched;
      userLoad();
    }
  }, []);

  return (
    <Fragment>
      {auth.isAuthenticated && <Navbar />}
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Landing />} />
        {!auth.isAuthenticated || !auth.otpVerified ? (
          <Fragment>
            <Route path="/login" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify" element={<Verify />} />
          </Fragment>
        ) : (
          <Fragment>
            <Route
              path="/login"
              element={<Navigate replace to={"/flight"} />}
            />
            <Route
              path="/register"
              element={<Navigate replace to={"/flight"} />}
            />
            <Route
              path="/verify"
              element={<Navigate replace to={"/flight"} />}
            />
          </Fragment>
        )}

        {auth.isAuthenticated ? (
          <Fragment>
            <Route path="/cart" element={<Cart />} />
            <Route path="/sellers/:airportId" element={<Sellers />} />
            <Route path="/flight" element={<Flight />} />
          </Fragment>
        ) : (
          <Route path="*" element={<Navigate replace to={"/"} />} />
        )}
      </Routes>
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  alert: state.alert,
});

const mapDispatchToProps = (dispatch) => ({
  userLoad: () => dispatch(loadUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
