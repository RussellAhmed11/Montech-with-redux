import { createStore } from "redux";
import producsReducer from "./reducer/productsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(producsReducer, composeWithDevTools());
export default store;
