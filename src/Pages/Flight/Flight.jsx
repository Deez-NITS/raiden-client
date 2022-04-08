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

    
};

export default Flight;
