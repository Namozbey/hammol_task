import { request } from "../utils/request";

export const getCategories = (params?: Params) =>
  request("/api/category", "get", params);
