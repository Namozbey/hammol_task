import React from "react";
import MovieCard from "./MovieCard";
import { useAppSelector } from "../../hooks/use-redux-hooks";
import Pagination from "@mui/material/Pagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import convertQueryToString from "../../utils/convertQueryToString";
import parseQuery from "../../utils/parseQuery";
import { useHistory } from "react-router-dom";

export default function MoviesList(): JSX.Element {
  const history = useHistory();

  const products: Item[] = useAppSelector((state) => state.products.data);
  const { count } = useAppSelector((state) => state.products.params);
  const { limit, offset } = parseQuery();

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const onPaginationChange = (e: React.ChangeEvent, page: number) => {
    const { limit = 12, offset, ...rest } = parseQuery();
    const restQuery = convertQueryToString(rest);
    history.push({
      search: `limit=${limit}&offset=${(page - 1) * limit}${restQuery}`,
    });
  };

  return (
    <div className="movies-list">
      <h2 className="count">
        <b>{count}</b> items found
      </h2>

      <div className="list">
        {products.map((elm) => (
          <MovieCard key={elm.id} data={elm} />
        ))}
      </div>

      <div className="pagination-row">
        <ThemeProvider theme={theme}>
          <Pagination
            size="large"
            shape="rounded"
            typeof="dark"
            variant="outlined"
            page={(offset - limit) / limit + 2}
            count={Math.ceil(count / limit)}
            onChange={onPaginationChange}
          />
        </ThemeProvider>
      </div>
    </div>
  );
}
