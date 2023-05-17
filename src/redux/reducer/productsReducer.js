import { add_To_Cart, remove_Frome_Cart } from "../actionTypes/actionTypes";

const initialstate = {
  cart: [],
};
const producsReducer = (state = initialstate, action) => {
  const selecteedProduct = state.cart.find(
    (product) => product._id === action.payload._id
  );
  switch (action.type) {
    case add_To_Cart:
      if (selecteedProduct) {
        const newCart = state.cart.filter(
          (product) => product._id !== selecteedProduct._id
        );
        selecteedProduct.quantity = selecteedProduct.quantity + 1;
        return { ...state, cart: [...newCart.cart, selecteedProduct] };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
      };
    case remove_Frome_Cart:
      return {
        ...state,
        cart: state.cart.filter(
          (product) => product._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};
export default producsReducer;
