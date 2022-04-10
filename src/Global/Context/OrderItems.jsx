import { createContext, useContext, useState} from "react";

const OrderItemsContext = createContext(); // global order context

const useOrder = () => {
  return useContext(OrderItemsContext); // custom hook to access context
};

// order provider
const OrderItemsProvider = ({ children }) => {

  const [items,setItems] = useState([]);


  return (
    <OrderItemsContext.Provider value={[items,setItems]}>
      {children}
    </OrderItemsContext.Provider>
  );
};

export { OrderItemsProvider, useOrder };
