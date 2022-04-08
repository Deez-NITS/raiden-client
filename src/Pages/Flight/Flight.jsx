<<<<<<< HEAD
import './Flight.scss';
import {ProgressBar} from '../../Components'
import FlightQuery from './FlightQuery';
import FlightResults from './FlightResults';
import { useState } from 'react';

const Flight = ()=>{
    const [foundFlight, setFoundFlight]= useState(true);
    const [flight, setFlight] = useState('dsdds');

    return(
        <section className='flightPage'>
    
            <h1 className='logo'><img src="src/Resources/Images/logo.png"/> Radien</h1>
            {!foundFlight && <FlightQuery {...{flight, setFlight, setFoundFlight}}/>}
            {foundFlight && <FlightResults {...{flight}}/>}
            <img className='background' src="src/Resources/Images/background.svg"/>
             <ProgressBar className="progress"/>
        </section>
    );

    
=======
import "./Flight.scss";

import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";

const Flight = () => {
  const [flight, setFlight] = useState("");
  return (
    <section>
      <h1 className="logo">
        <img src="src/Resources/Images/logo.png" /> Radien
      </h1>

      <div className="query">
        <label>Find your Flight</label>
        <div className="search">
          <AiOutlineSearch />
          <input
            placeholder="Flight Number"
            value={flight}
            onChange={(e) => setFlight(e.target.value)}
          />
        </div>
      </div>
      <img className="background" src="src/Resources/Images/background.svg" />
    </section>
  );
>>>>>>> 78034d42b83745d58460d44dc249d925c1311bab
};

export default Flight;
