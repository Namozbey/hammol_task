import { request } from "../utils/request";

export const getOneProduct = (id: number) =>
  request(`/api/product/${id}`, "get");

export const getProducts = (params?: Params) =>
  request("/api/product", "get", params);
