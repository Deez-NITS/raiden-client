import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList, ProgressBar } from "../../Components";
import { AiFillStar } from "react-icons/ai";
import "./Sellers.scss";
import httpService from "../../Global/Services/httpService";

const Sellers = () => {

  const [sellers, setSellers] = useState([]);
  const [currSeller, setCurrSeller] = useState(null);

  const params = useParams();

  const { airportId } = params;

  useEffect(() => {
    (async (id) => {
      const res = await httpService.get("/airport/:id/providers");

      const data = res.data;

      if(data.success){
        setSellers(data.message);
      }

    })(airportId)

  },[airportId])

  const handleSellerSelect = (seller) => {
    setCurrSeller(seller);
  }

  return (
    <section id="seller">
      <h1 id="heading">
        <div id="logoWrapper">
          <img src="img/logo.png" alt="" />
        </div>
        Raiden
      </h1>

      {currSeller && <ItemList setCurrSeller={setCurrSeller} currSeller={currSeller} />}

      <div id="sellerListContainer">
        <h2 id="sellerListHeading">{"blaze aa"}</h2>
        <div id="sellerList">
          {
            sellers.map((elem) => (
              <div className="seller" key={elem.id} onClick={() => handleSellerSelect(elem)}>
                <div className="sellerImage">
                  <img src={encodeURI(elem.img)} alt="" />
                </div>
                <div className="sellerInfo">
                  <div className="sellerName">{elem.name}</div>
                  <div className="sellerDescription">{elem.description}</div>
                  <div>

                  </div>
                </div>
                <div className="sellerRating">
                  <AiFillStar className="starIcon"/>
                </div>
              </div>
          ))}
        </div>
      </div>
      <ProgressBar stage={2}/>
    </section>
  );
};

export default Sellers;
