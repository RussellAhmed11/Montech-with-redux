import { add_To_Cart, remove_Frome_Cart } from "../actionTypes/actionTypes";

export const addToCart = (product) => {
  return {
    type: add_To_Cart,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: remove_Frome_Cart,
    payload: product,
  };
};
