/* eslint-disable indent */
import { batch } from "react-redux";
import { AppThunk } from "../store";
import { getProducts, getOneProduct } from "../../services";
import { AppDispatch, RootState } from "../store";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCT = "SET_PRODUCT";

export const SET_PARAMS = "SET_PRODUCT_PARAMS";
export const ADD_PARAMS = "ADD_PRODUCT_PARAMS";

interface Response {
  products: Item[];
  count: number;
}

// ****************** SYNC *****************
export const setSelectedProduct = (product: Item | null) => ({
  type: SET_PRODUCT,
  payload: product,
});

// ****************** ASYNC *****************
const fetchItemsWithStateParams = (
  dispatch: AppDispatch,
  getState: () => RootState
) => {
  const newParams = getState().products.params;
  getProducts(newParams).then((res: Response) => {
    batch(() => {
      dispatch({
        type: ADD_PARAMS,
        payload: { count: res.count },
      });
      dispatch({
        type: SET_PRODUCTS,
        payload: res.products,
      });
    });
  });
};

export const fetchProducts =
  (params?: Params): AppThunk =>
  (dispatch, getState) => {
    if (params) {
      dispatch({
        type: ADD_PARAMS,
        payload: params,
      });
    }
    fetchItemsWithStateParams(dispatch, getState);
  };

export const fetchOneProduct =
  (id: number): AppThunk =>
  (dispatch) => {
    getOneProduct(id).then((res: Item) => {
      dispatch(setSelectedProduct(res));
    });
  };

export const searchProducts =
  (search: string, searchBy = "title"): AppThunk =>
  (dispatch, getState) => {
    dispatch({
      type: ADD_PARAMS,
      payload: {
        searchBy,
        search,
      },
    });

    fetchItemsWithStateParams(dispatch, getState);
  };

export const sortProducts =
  (sortBy: string, sortOrder = "desc"): AppThunk =>
  (dispatch, getState) => {
    dispatch({
      type: ADD_PARAMS,
      payload: { sortBy, sortOrder },
    });

    fetchItemsWithStateParams(dispatch, getState);
  };
