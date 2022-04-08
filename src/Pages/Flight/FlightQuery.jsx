import { useEffect, useState } from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const FlightQuery = ({flight, setFlight, setFoundFlight})=>{

    const flightNumbers = [
        'SX-135',
        'SX-345',
        'SX-643',
        'SX-467',
    ]

    const [searchNumbers, setSearchNumbers] = useState([]);

    useEffect(()=>{
        let temp = [];
        if(flight)
        flightNumbers.forEach((it)=>{
            if(it.toLowerCase().includes(flight.toLowerCase()))
               temp.push(it);
        })

        setSearchNumbers(temp);
    }, [flight]
    );
    
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
        <div className='suggestions'>
            {searchNumbers.map((e, index)=>{
                if(index>9) return;
                return <span onClick={()=>{setFlight(e);setFoundFlight(true);}}>{e}</span>
            })}
        </div>
    </div>
    )
};

export default FlightQuery;