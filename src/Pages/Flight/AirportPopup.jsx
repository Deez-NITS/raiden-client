import "./AirportPopup.scss";
import { MdOutlineClose } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { Button } from "../../Components";
import { useNavigate } from "react-router-dom";
const AirportPopup = ({
  airport,
  setActiveAirport,
  flight,
  airportType,
  activeDate,
  flightObj
}) => {

  console.log(flightObj)
  const sDate = flightObj? new Date(flightObj.startTime): new Date();
  const eDate = flightObj? new Date(flightObj.endTime) : new Date();

  const navigate = useNavigate();
  const handleSelect = ()=>{
      navigate('/seller/' + airport.id);
  }


  

  return (
    <>
      <div className="airPopBack" onClick={() => setActiveAirport(null)}></div>
      <div className="airPop">
        <div className="header">
          <span className="code">Code: {airport.code}</span>
          <span className="name">{airport.name}</span>
          <span className="place">{airport.place}</span>
          <span class="flight">Flight {flight}</span>
        </div>
        <div className="data">
          <img src="/img/airport.jpg" />
          <div className="details">
            {airportType == "source" && (
              <span className="time">
                Departure: {flightObj ? (<span>{sDate.getHours()}:{sDate.getMinutes()}</span> ) : "no flight"}
              </span>
            )}
            {airportType == "destination" && (
              <span className="time">
                Arrival:  {flightObj? (<span>{eDate.getHours()}:{eDate.getMinutes()}</span>)  : "no flight"}
              </span>
            )}
          </div>
        </div>
        {/* <div className="rating">
          {airport.rating}
          <AiFillStar />
        </div> */}

        <Button label="Select" primary={true} onClick={handleSelect}/>
        <MdOutlineClose
          className="cross"
          onClick={() => setActiveAirport(null)}
        />
      </div>
    </>
  );
};

export default AirportPopup;
