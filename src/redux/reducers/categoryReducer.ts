/* eslint-disable indent */
import { AnyAction } from "redux";
import { SET_CATEGORIES } from "../actions/categoryActions";

interface State {
  data: Option[];
}

const initialState: State = {
  data: [],
};

export default function categoriesReducer(
  state = initialState,
  action: AnyAction
) {
  const { type, payload } = action;
  switch (type) {
    case SET_CATEGORIES:
      return { ...state, data: payload };
    default:
      return state;
  }
}
