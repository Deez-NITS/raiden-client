import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import AirportPopup from './AirportPopup';

const FlightResults = ({flight})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const airports = {
        source:
        {
            name:"Blaze Airport",
            rating:"5",
            code:"GHY",
            place:'KL Road, Guwahati',
        },
        destination:
        {
            name:"Tankapur National Airport",
            rating:"3",
            code:"GHY",
            place:'BD Road, Guwahati'
            
        },
    
    }

    const [airportType, setAirportType] = useState('');
    
    const [activeAirport, setActiveAirport] = useState(null);
    const dates = [];
    const [activeDate, setActiveDate] = useState(0);
    for(let i=0, date = new Date();i<15;i++){
        dates.push({date:date.getDate(), month:monthNames[date.getMonth()], active:false});
        date.setDate(date.getDate() + 1);
    }

  


    dates[activeDate].active = true;;
    return(
        <>
            <div className="searchResults">
                <div className="header">
                    <h1>Search Results</h1>
                    <h3>Flight {flight}</h3>
                </div>

                <div className="airportList">
                            <div className="airport"  onClick={()=>{setActiveAirport(airports.source);setAirportType('source');}}>
                                <span className="name">
                                {airports.source.name}
                                <span className="rating">
                                <AiFillStar/> {airports.source.rating}
                                </span>
                                </span>
                            
                                <span className="code">
                                Code: {airports.source.code}
                                </span>
                        
                            </div>
                            <div className="airport"  onClick={()=>{setActiveAirport(airports.destination);setAirportType('destination');}}>
                                <span className="name">
                                {airports.destination.name}
                                <span className="rating">
                                <AiFillStar/> {airports.destination.rating}
                                </span>
                                </span>
                            
                                <span className="code">
                                Code: {airports.destination.code}
                                </span>
                        
                            </div>
                </div>
            </div>

            <div className="dateSelect">
                {dates.map((date)=>{
                    return(
                        <div className="date" name={date.active?'active':'' } onClick={()=>{setActiveDate(date.date - dates[0].date)}}>
                            {date.date} {date.month}
                        </div>
                    )
                })}
            </div>
            {(activeAirport!=null) && <AirportPopup {...{airport:activeAirport, setActiveAirport, flight, activeDate, airportType}}/>}
        </>
    )
}


export default FlightResults;