/* eslint-disable indent */
import { AppThunk } from "../store";
import { getCategories } from "../../services";

export const SET_CATEGORIES = "SET_CATEGORIES";

// ****************** ASYNC *****************
export const fetchCategories = (): AppThunk => (dispatch) => {
  getCategories().then((res: string[]) => {
    dispatch({
      type: SET_CATEGORIES,
      payload: [
        { label: "all", value: "all" },
        ...res.map((value) => ({ label: value, value })),
      ],
    });
  });
};
