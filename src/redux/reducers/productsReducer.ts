/* eslint-disable indent */
import { AnyAction } from "redux";
import {
  ADD_PARAMS,
  SET_PARAMS,
  SET_PRODUCT,
  SET_PRODUCTS,
} from "../actions/productsActions";
// interface Action {
//   type: string;
//   payload: Item | Item[] | string;
// }

interface State {
  data: Item[];
  params: Params;
  selectedProduct: Item;
  isFetching: boolean;
}

const initialState: State = {
  data: [],
  params: {},
  selectedProduct: null,
  isFetching: false,
};

export default function productsReducer(
  state = initialState,
  action: AnyAction
) {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, data: payload };
    case SET_PRODUCT:
      return { ...state, selectedProduct: payload };
    case SET_PARAMS:
      return { ...state, params: payload };
    case ADD_PARAMS:
      return { ...state, params: { ...state.params, ...payload } };
    default:
      return state;
  }
}
