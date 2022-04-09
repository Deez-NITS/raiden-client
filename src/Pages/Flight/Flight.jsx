import "./Flight.scss";
import { ProgressBar } from "../../Components";
import FlightQuery from "./FlightQuery";
import FlightResults from "./FlightResults";
import { useState } from "react";

const Flight = () => {
  const [foundFlight, setFoundFlight] = useState(false);
  const [flight, setFlight] = useState("");

  return (
    <section className="flightPage">
      <h1 className="logo">
        <img src="/img/logo.png" /> Radien
      </h1>
      {!foundFlight && (
        <FlightQuery {...{ flight, setFlight, setFoundFlight }} />
      )}
      {foundFlight && <FlightResults {...{ flight }} />}
      <img className="background" src="/img/background.svg" />
      <ProgressBar className="progress" />
    </section>
  );
};

export default Flight;
