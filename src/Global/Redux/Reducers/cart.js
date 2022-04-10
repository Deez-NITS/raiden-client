/**
 * @typedef {[{
 *      items: [{
 *        id: number;
 *        providerId: number;
 *        name: string;
 *        description: string;
 *        price: number;
 *        img: string;
 *        quantity: number;
 *      }];
 *      totalQuantity: number;
 *      totalPrice: number;
 *    }]} authState
 *
 * @typedef {{
 *      type: string;
 *      payload: any;
 *    }} actionType
 */

/**
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const addToCart = (state, action) => {
  const userItem = action.payload;
  console.log(state.items);
  const updatedItems = [];

  const foundItem = state.items.find((item) => item.id === userItem.id);

  if (foundItem) {
    foundItem.quantity++;
    updatedItems.push(foundItem);
  } else {
    updatedItems.push(userItem);
  }

  updatedItems.push(...state.items);

  const updatedState = {
    totalQuantity: state.totalQuantity++,
    totalPrice: state.totalPrice + userItem.price,
    item: updatedItems,
  };

  localStorage.setItem("cart", updatedState);

  return updatedState;
};

/**
 * @param { authState } state
 * @param { actionType } action
 *
 * @returns {authState}
 */
const removeFromCart = (state, action) => {
  const foundItem = state.items.find((item) => item.id === action.payload);

  const updatedItems = [];
  let totalPrice = state.totalPrice;
  let totalQuantity = state.totalQuantity;

  if (foundItem) {
    totalPrice = state.totalPrice - foundItem.price;
    totalQuantity = state.totalQuantity--;
    if (foundItem.quantity === 1) {
      updatedItems.push(
        ...state.items.filter((item) => item.id !== foundItem.id)
      );
    } else {
      foundItem.quantity--;
      updatedItems.push(...state.items, foundItem);
    }
  } else {
    updatedItems.push(...state.items);
  }

  const updatedState = {
    totalPrice,
    totalQuantity,
    items: updatedItems,
  };

  localStorage.setItem("cart", updatedState);

  return updatedState;
};

export default {
  addToCart,
  removeFromCart,
};
