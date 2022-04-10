import Button from "../Button/Button";
import "./ItemAddCard.scss";
import { MdOutlineClose } from "react-icons/md"
import Counter from "../Counter/Counter";
import { useState } from "react";
import { connect } from "react-redux";
import { useOrder } from "../../Global/Context/OrderItems";

const ItemAddCard = ({selectedItem, setSelectedItem }) => {

  const [items,setItems] = useOrder();

  const [quantity,setQuantity] = useState(1);

  const handleClose = () => {
    setSelectedItem(null);
  }

  const handleAdd = (item) => {
    const data = {
      name: selectedItem.name,
      providerId: selectedItem.providerId,
      img: selectedItem.img,
      id: selectedItem.id,
      description: selectedItem.description,
      price: selectedItem.price,
      quantity: quantity,
    }
    setItems((prev) => {
      return [...prev, data];
    })

    setSelectedItem(null);
  }

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
        <Button primary={true} label={"add"} onClick={() => handleAdd(selectedItem)} />
      </div>
    </div>
  );
};
export default ItemAddCard;
