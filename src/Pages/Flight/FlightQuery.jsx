import { useEffect, useState } from 'react';
import {AiOutlineSearch} from "react-icons/ai";

const FlightQuery = ({flight, setFlight, foundFlight, setFoundFlight})=>{

    const [flightNumbers, setFlightNumbers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/api/v1/flight/all')
        .then(response => response.json())
        .then(data => {
            const temp = []
            data.message.forEach((fl)=>temp.push(fl.flightNumber));
            setFlightNumbers(temp);
        });
        
    }, [foundFlight]);
    

  

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