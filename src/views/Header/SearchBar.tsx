import React from "react";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import { useHistory, useParams, useLocation } from "react-router-dom";

export default function SearchBar(): JSX.Element {
  const history = useHistory();
  const { search } = useLocation();
  const { searchQuery = "" } = useParams<{ searchQuery?: string }>();

  let debounce = setTimeout(() => {
    console.log();
  }, 0);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(debounce);
    const text = e.target.value.trim();
    debounce = setTimeout(() => {
      history.push({ pathname: `/search${text ? "/" + text : ""}`, search });
    }, 400);
  };

  return (
    <div className="search-bar-content">
      <h1 className="search-heading">Find your product</h1>
      <div className="search-bar">
        <Input
          placeholder="What do you want to watch?"
          defaultValue={searchQuery}
          onChange={onChange}
        />
        <Button size={{ x: "233px", y: "57px" }}>Search</Button>
      </div>
    </div>
  );
}
