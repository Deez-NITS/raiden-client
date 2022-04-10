import { Button } from "../../Components";
import { useOrder } from "../../Global/Context/OrderItems";
import "./Cart.scss";

const Cart = () => {

  const [items, setItems] = useOrder();

  // const item = {
  //   id: 1223,
  //   price: 23,
  //   name: "chicken",
  //   img: "/img/logo.png",
  //   description: "chicken",
  // };

  // const items = [item, item, item];

  const handleRemove = (id) => {
    setItems((prev) => {
      return prev.filter((elem) => {
          return elem.id!==id;
      })
    });
  }

  const placeOrder =() => {
    const ids = items.map((elem) => elem.id);
    
    setItems([]);
  }

  return (
    <section id="cart">
      <h1 id="heading">
        <div id="logoWrapper">
          <img src="/img/logo.png" alt="" />
        </div>
        Raiden
      </h1>

      <img id="background" src="/img/background.svg" alt="" />

      <div id="itemList">
        {items.map((elem) => (
          <div className="item">
            <div className="itemImage">
              <img src={elem.img} alt="" />
            </div>
            <div className="itemInfo">
              <div className="itemName">{elem.name}</div>
              <div className="itemDescription">{elem.description}</div>
            </div>
            <div className="itemActions">
              <Button onClick={() => handleRemove(elem.id)} label={"Remove"} />
            </div>
          </div>
        ))}
      </div>

      <div id="placeOrderActions">
        <Button onClick={placeOrder} primary={true} label={"Place Order"} />
      </div>
    </section>
  );
};

export default Cart;
