import "./style.scss";
import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import MovieDetails from "../../components/MovieDetails";
import { useAppSelector } from "../../hooks/use-redux-hooks";
import { useDispatch } from "react-redux";
import parseQuery from "../../utils/parseQuery";
import convertQueryToString from "../../utils/convertQueryToString";
import { useHistory } from "react-router-dom";
import {
  fetchOneProduct,
  setSelectedProduct,
} from "../../redux/actions/productsActions";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const selectedProduct = useAppSelector(
    (state) => state.products.selectedProduct
  );

  const { product, ...rest } = parseQuery();

  useEffect(() => {
    if (product) dispatch(fetchOneProduct(+product));
  }, [product]);

  const onSearchClick = () => {
    const restQuery = convertQueryToString(rest, "");
    history.push({ search: restQuery });

    dispatch(setSelectedProduct(null));
  };

  if (selectedProduct) {
    return (
      <MovieDetails data={selectedProduct} onSearchClick={onSearchClick} />
    );
  }

  return (
    <div className="search-panel">
      <div className="background" />
      <div className="nav">
        <div className="app-name">Logo</div>
      </div>
      <SearchBar />
    </div>
  );
}
