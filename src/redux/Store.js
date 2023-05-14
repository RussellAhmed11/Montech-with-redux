import { createStore } from "redux";
import producsReducer from "./reducer/productsReducer";

const store = createStore(producsReducer);
export default store;
