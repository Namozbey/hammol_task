import React from "react";
import TabsBar from "./TabsBar";
import MoviesList from "./MoviesList";
import "./style.scss";

export default function Content(): JSX.Element {
  return (
    <div className="main-panel">
      <TabsBar />
      <MoviesList />
    </div>
  );
}
