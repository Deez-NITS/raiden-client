import './AirportPopup.scss';
import {MdOutlineClose} from 'react-icons/md';
import { AiFillStar } from "react-icons/ai";
import {Button} from '../../Components'
const AirportPopup = ({airport, setActiveAirport, flight, airportType, activeDate})=>{
    const flightObj = {
        startTime:'13:34',
        endTime:'14:12'
    }

    return(
        <>
        <div className='airPopBack' onClick={()=>setActiveAirport(null)}></div>
        <div className='airPop'>
            <div className='header'>
                <span className='code'>
                    Code: {airport.code}
                </span>
                <span className='name'>
                    {airport.name}
                </span>
                <span className='place'>
                    {airport.place}
                </span>
                <span class="flight">
                    Flight {flight}
                </span>
            </div>
            <div class='data'>
                <img src='src/Resources/Images/airport.jpg'/>
                <div class='details'>
                    {(airportType=='source') && <span className='time'>Departure: <span>{flightObj.startTime}</span></span>}
                    {(airportType=='destination') && <span className='time'>Arrival: <span>{flightObj.endTime}</span></span>}
                </div>
            </div>
            <div className='rating'>
                {airport.rating}
                <AiFillStar/>
            </div>  

            <Button label="Select" primary={true}/>
            <MdOutlineClose className='cross' onClick={()=>setActiveAirport(null)}/>
        </div>
        </>
    );
};

export default AirportPopup;