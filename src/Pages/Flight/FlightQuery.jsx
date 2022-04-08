import { useState } from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const FlightQuery = ({flight, setFlight, setFoundFlight})=>{

    return(
        <div className="query">
        <label>Find your Flight</label>
        <div className='search'>
            <AiOutlineSearch/>
            <input 
            placeholder='Flight Number'
            value={flight}
            onChange={(e)=>setFlight(e.target.value)}
            />
        </div>
    </div>
    )
};

export default FlightQuery;