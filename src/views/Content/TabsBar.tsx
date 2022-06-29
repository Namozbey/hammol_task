import "./style.scss";
import React from "react";
import { Tabs } from "../../components/Tabs";
import parseQuery from "../../utils/parseQuery";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../hooks/use-redux-hooks";
import convertQueryToString from "../../utils/convertQueryToString";

export default function TabsBar(): JSX.Element {
  const history = useHistory();
  const options = useAppSelector((state) => state.categories.data);
  const { genre = "all" } = parseQuery();

  const onTabChange = (val: string) => {
    const { genre, ...rest } = parseQuery();
    const restQuery = convertQueryToString(rest);
    history.push({ search: `genre=${val}${restQuery}` });
  };

  return (
    <div className="tabs-bar">
      <Tabs options={options} current={genre} onChange={onTabChange} />
    </div>
  );
}
