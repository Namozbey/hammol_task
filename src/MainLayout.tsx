import React, { useEffect } from "react";
import Footer from "./views/Footer";
import Heading from "./views/Header";
import Content from "./views/Content";
import parseQuery from "./utils/parseQuery";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/actions/productsActions";
import { fetchCategories } from "./redux/actions/categoryActions";
import convertQueryToString from "./utils/convertQueryToString";

export default function MainLayout(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const { searchQuery = "" } = useParams<{ searchQuery?: string }>();
  const { genre = "all", limit, offset } = parseQuery();

  useEffect(() => {
    const { limit = 12, offset = 0, ...rest } = parseQuery();
    const restQuery = convertQueryToString(rest);
    history.push({
      search: `limit=${limit}&offset=${offset}${restQuery}`,
    });

    dispatch(fetchCategories());
  }, []);

  useEffect(() => {
    dispatch(
      fetchProducts({
        category: genre === "all" ? "" : genre,
        name: searchQuery,
        limit,
        offset,
      })
    );
  }, [genre, searchQuery, limit, offset]);

  return (
    <>
      <Heading />
      <Content />
      <Footer />
    </>
  );
}
