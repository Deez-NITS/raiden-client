import "./ItemList.scss";
import { MdOutlineClose } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import Button from "../Button/Button";
import ItemAddCard from "../ItemAddCard/ItemAddCard";

const ItemList = () => {
  const handleClose = () => console.log("asfd");

  const item = {
    id: 1223,
    price: 23,
    name: "chicken",
    img: "/img/logo.png",
    description: "chicken",
  };

  const items = [item, item, item];

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
        <MdOutlineClose id="closeBtn" onClick={handleClose} />
      </div>

      <div id="itemList">
        {items.map((elem) => (
          <div className="item">
            <div className="itemImage">
              <img src={elem.img} alt="" />
            </div>
            <div className="itemInfo">
              <div className="itemName">{elem.name}</div>
              <div className="itemDescription">{elem.description}</div>
              <div className="itemActions">
                <Button label={"add"} />
              </div>
            </div>
            <div className="itemRating">
              4.6
              <AiFillStar className="starIcon" />
            </div>
          </div>
        ))}
      </div>

      <div id="itemAddCardContainer">
        <ItemAddCard />
      </div>
    </section>
  );
};

export default ItemList;
