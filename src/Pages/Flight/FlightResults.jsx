import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import httpService from "../../Global/Services/httpService";
import AirportPopup from './AirportPopup';

const FlightResults = ({flight})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const [source, setSource] = useState({
        "id": 1,
        "name": "Source Airport",
        "code": "GHY",
        "place": "KL Road, Guwahati"
    });
    const [destination, setDestination] = useState({
        "id": 2,
        "name": "Destination Airport",
        "code": "GHH",
        "place": "BD Road, Guwahati"
    });

    const [flightObj, setFlightObj] = useState({
        "id": 1,
        "company": "BiJet",
        "flightNumber": "SX-345",
        "startTime": "2022-04-10T18:24:00.000Z",
        "endTime": "2022-04-10T19:10:00.000Z",
        "sourceCode": "GHY",
        "destinationCode": "GHH"

    })


    useEffect(()=>{
        httpService.get('/airport/1').then(s=>setSource(s.data.message));
        httpService.get('/airport/2').then(s=>setDestination(s.data.message));
          
        httpService.get('/flight/1')
        .then(fl => {
            setFlightObj(fl.data.message);
        });
    }, [flight])
    

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
                            <div className="airport"  onClick={()=>{setActiveAirport(source);setAirportType('source');}}>
                                <span className="name">
                                {source.name}
                                <span className="rating">
                                {/* <AiFillStar/> {airports.source.rating} */}
                                </span>
                                </span>
                            
                                <span className="code">
                                Code: {source.code}
                                </span>
                        
                            </div>
                            <div className="airport"  onClick={()=>{setActiveAirport(destination);setAirportType('destination');}}>
                                <span className="name">
                                {destination.name}
                                <span className="rating">
                                {/* <AiFillStar/> {airports.destination.rating} */}
                                </span>
                                </span>
                            
                                <span className="code">
                                Code: {destination.code}
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
            {(activeAirport!=null) && <AirportPopup {...{airport:activeAirport, setActiveAirport, flight, activeDate, airportType, flightObj}}/>}
        </>
    )
}


export default FlightResults;