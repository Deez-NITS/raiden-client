import "./ItemList.scss"
import { AiOutlineClose } from "react-icons/ai"
import { AiFillStar } from "react-icons/ai"
import Button from "../Button/Button"

const ItemList = () => {

  const handleClose = () =>  console.log("asfd")

  const item = {
    id: 1223,
    price: 23,
    name: "chicken",
    img: "/src/Resources/Images/logo.png",
    description: "chicken", 
  }

  const items = [item,item,item];

  return (  
    <section id="items">
      <div id="sellerContainer">
        <div id="sellerDetails">
          <div id="sellerImage">
            <img src="" alt="" />
          </div>
          <div id="sellerInfo">
            <div id="sellerName">{"hallal"}</div>
            <div id="sellerDescription">{"hallal"}</div>
          </div>
        </div>
        <AiOutlineClose id="closeBtn" onClick={handleClose}/>
      </div>

      <div id="itemList">
        {
          items.map((elem) => (
            <div className="item">
              <div className="itemImage">
                <img src={elem.img} alt="" />
              </div>
              <div className="itemInfo">
                <div className="itemName">{elem.name}</div>
                <div className="itemDescription">{elem.description}</div>
                <div className="itemActions">
                  <Button label={"add"}/>
                </div>
              </div>
              <div className="itemRating">
                4.6
                <AiFillStar className="starIcon"/>
              </div>
            </div>
          ))
        }
      </div>

    </section>
  );
}

export default ItemList;
