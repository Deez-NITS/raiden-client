import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList, ProgressBar } from "../../Components";
import { AiFillStar } from "react-icons/ai"
import "./Sellers.scss"
import httpService from "../../Global/Services/httpService";

const Sellers = () => {

  // const [sellers, setSellers] = useState([]);
  // const params = useParams();

  // const { airportId } = params;

  // useEffect(() => {
  //   (async (id) => {
  //     httpService.get()
  //   })(airportId)

  // },[])


  const seller = {
    id: 1,
    name: "halal",
    airportId: 123123,
    gstin: "halal",
    description: "halal halal halal halal halal halal halal halal halal halal ",
    img: "/src/Resources/Images/gmailLogo.png",
    tags: ["chinese","Indian"],
    items: [],
    
  }

  const sellers = [seller,seller,seller];

  return (  
    <section id="seller">
      <h1 id="heading">
        <div id="logoWrapper">
          <img src="/src/Resources/Images/logo.png" alt="" />
        </div>
        Raiden
      </h1>

      <ItemList/>

      <div id="sellerListContainer">
        <h2 id="sellerListHeading" >{"blaze aa"}</h2>
        <div id="sellerList">
          {
            sellers.map((elem) => (
              <div className="seller">
                <div className="sellerImage">
                  <img src={elem.img} alt="" />
                </div>
                <div className="sellerInfo">
                  <div className="sellerName">{elem.name}</div>
                  <div className="sellerDescription">{elem.description}</div>
                  <div>

                  </div>
                </div>
                <div className="sellerRating">
                  4.6
                  <AiFillStar className="starIcon"/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <ProgressBar/>
    </section>
  );
}

export default Sellers;
