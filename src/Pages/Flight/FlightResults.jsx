import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import httpService from "../../Global/Services/httpService";
import AirportPopup from './AirportPopup';

const FlightResults = ({flight})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const dates = [];
    const [activeDate, setActiveDate] = useState(0);

    const [airportType, setAirportType] = useState('');
    
    const [activeAirport, setActiveAirport] = useState(null);
    for(let i=0;i<15;i++){
        const date = new Date();
        date.setDate(date.getDate() + i);
        dates.push({date:date.getDate(), month:monthNames[date.getMonth()], active:false, dateObj:date});
    }

  
    dates[activeDate].active = true;


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
        "startTime": "2022-04-10T05:52:58.832Z",
        "endTime": "2022-04-10T05:52:58.832Z",
        "sourceCode": "GHY",
        "destinationCode": "GHH"

    })


    useEffect(()=>{
        httpService.get('/airport/code/' + flightObj.sourceCode).then(s=>setSource(s.data.message));
        httpService.get('/airport/code/' + flightObj.destinationCode).then(s=>setDestination(s.data.message));
          
        httpService.post('/flight', {
            flightNumber:flight,
            startTime:dates[activeDate].dateObj.getTime()
        })
        .then(fl => {
            setFlightObj(fl.data.message);
            // console.log(dates[activeDate].dateObj.toISOString());
            // console.log(fl.data);
        });
    }, [flight, activeDate])
    


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