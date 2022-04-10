import Button from "../Button/Button";
import "./ItemAddCard.scss";
import { MdOutlineClose } from "react-icons/md"
import Counter from "../Counter/Counter";
import { useState } from "react";

const ItemAddCard = ({selectedItem, setSelectedItem}) => {

  const [quantity,setQuantity] = useState(1);

  const handleClose = () => {
    setSelectedItem(null);
  }

  const handleAdd = () => {
    console.log("asdf")
  }

  const item = {
    id: 1223,
    price: 23,
    name: "chicken",
    img: "/img/logo.png",
    description: "chicken",
  };

  return (
    <div id="itemAddCard">
      <MdOutlineClose onClick={handleClose} id="closeBtn"/>
      <div id="itemDetails">
        <div id="itemImage">
          <img src="" alt="" />
        </div>
        <div id="itemName">
          {selectedItem.name}
        </div>
      </div>
      <div>
        <Counter label = {"Quantity"} state={[quantity,setQuantity]} />
      </div>
      <div id="addBtnContainer">
        <div>{"Total: " + (selectedItem.price * quantity)}</div>
        <Button primary={true} label={"add"} />
      </div>
    </div>
  );
};
export default ItemAddCard;
