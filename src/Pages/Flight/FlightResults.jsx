const FlightResults = ({flight})=>{
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
    ]

    return(
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
                        {airport.rating}
                        </span>
                        </span>
                       
                        <span className="code">
                        Code: {airport.code}
                        </span>
                    
                        </div>)
                })}
           </div>
        </div>
    )
}


export default FlightResults;