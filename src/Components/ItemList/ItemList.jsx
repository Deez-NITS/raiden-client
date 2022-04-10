import "./ItemList.scss"
import { MdOutlineClose } from "react-icons/md"
import { AiFillStar } from "react-icons/ai"
import Button from "../Button/Button"
import ItemAddCard from "../ItemAddCard/ItemAddCard"
import { useEffect, useState } from "react"
import httpService from "../../Global/Services/httpService"

const ItemList = ({currSeller, setCurrSeller}) => {

  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null)

  const handleClose = () => {
    setCurrSeller(null);
  }


  useEffect(() => {
    (async ()=>{
      const res = await httpService.get(`/item/provider/${currSeller.id}`)

      const data = res.data;
      console.log(data)
      if(data.success){
        setItems(data.message);
      }
    })()

    const fetchScore = async () => {

    }


  },[currSeller])

  // const item = {
  //   id: 1223,
  //   price: 23,
  //   name: "chicken",
  //   img: "/src/Resources/Images/logo.png",
  //   description: "chicken", 
  // }

  // const items = [item,item,item];

  

  return (
    <section id="items">
      <div id="sellerContainer">
        <div id="sellerDetails">
          <div id="sellerImage">
            <img src={currSeller.img} alt="" />
          </div>
          <div id="sellerInfo">
            <div id="sellerName">{currSeller.name}</div>
            <div id="sellerDescription">{currSeller.description}</div>
          </div>
        </div>
        <MdOutlineClose id="closeBtn" onClick={handleClose} />
      </div>

      <div id="itemList">
        {
          items.map((elem) => (
            <div className="item" key={elem.id}>
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
                <AiFillStar className="starIcon" />
              </div>
            </div>
        ))}
      </div>

      {selectedItem && <div id="itemAddCardContainer">
        <ItemAddCard selectedItem = {selectedItem} setSelectedItem = {setSelectedItem} />
      </div>}

    </section>
  );
};

export default ItemList;
