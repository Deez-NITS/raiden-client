import { useState } from "react";
import { AiFillStar } from "react-icons/ai"

const FlightResults = ({flight})=>{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const airports = [
        {
            name:"Blaze Airport",
            rating:"5",
            code:"GHY"
        },

        {
            name:"Tankapur National Airport",
            rating:"3",
            code:"GHY"
        },
    ];

    const dates = [];
    const [activeDate, setActiveDate] = useState(0);

    for(let i=0, date = new Date();i<15;i++){
        dates.push({date:date.getDate(), month:monthNames[date.getMonth()], active:false});
        date.setDate(date.getDate() + 1);
    }

    dates[activeDate].active = true;


    return(
        <>
            <div className="searchResults">
                <div className="header">
                    <h1>Search Results</h1>
                    <h3>Flight {flight}</h3>
                </div>

                <div className="airportList">
                    {airports.map((airport)=>{
                        return (
                            <div className="airport">
                            <span className="name">
                            {airport.name}
                            <span className="rating">
                            <AiFillStar/> {airport.rating}
                            </span>
                            </span>
                        
                            <span className="code">
                            Code: {airport.code}
                            </span>
                        
                            </div>)
                    })}
                </div>
            </div>

            <div className="dateSelect">
                {dates.map((date, index)=>{
                    return(
                        <div className="date" name={date.active?'active':'' } onClick={()=>{setActiveDate(index)}}>
                            {date.date} {date.month}
                        </div>
                    )
                })}
            </div>
        </>
    )
}


export default FlightResults;