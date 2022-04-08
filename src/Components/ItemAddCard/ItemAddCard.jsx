import Button from "../Button/Button";
import "./ItemAddCard.scss";
import { MdOutlineClose } from "react-icons/md"

const ItemAddCard = () => {

  const item = {
    id: 1223,
    price: 23,
    name: "chicken",
    img: "/src/Resources/Images/logo.png",
    description: "chicken", 
  }

  return (  
    <div id="itemAddCard">
      <MdOutlineClose id="closeBtn"/>
      <div id="itemDetails">
        <div id="itemImage">
          <img src="" alt="" />
        </div>
        <div id="itemName">
          {item.name}
        </div>
      </div>
      <div>
        counter
      </div>
      <div id="addBtnContainer">
        <div>{"Total: " + 123}</div>
        <Button primary={true} label={"add"} />
      </div>
    </div>
  );
}
export default ItemAddCard;
