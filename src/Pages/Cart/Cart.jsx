import { Button } from "../../Components";
import "./Cart.scss";

const Cart = () => {

  const item = {
    id: 1223,
    price: 23,
    name: "chicken",
    img: "/src/Resources/Images/logo.png",
    description: "chicken", 
  }

  const items = [item,item,item];

  return (  
    <section id="cart">

      <h1 id="heading">
        <div id="logoWrapper">
          <img src="/src/Resources/Images/logo.png" alt="" />
        </div>
        Raiden
      </h1>

      <img id="background" src="/src/Resources/Images/background.svg" alt="" />

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
              </div>
              <div className="itemActions">
                <Button label={"Remove"}/>
              </div>
            </div>
          ))
        }
      </div>
      
      <div id="placeOrderActions">
        <Button primary={true} label={"Place Order"}/>
      </div>

    </section>
  );
}

export default Cart;
