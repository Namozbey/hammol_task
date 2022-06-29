import React, { useState, useEffect } from "react";
import Tag from "../../components/Tag";
import parseQuery from "../../utils/parseQuery";
import { useHistory } from "react-router-dom";
import { errorImageUrl } from "../../constants/basic";
import convertQueryToString from "../../utils/convertQueryToString";

interface Props {
  data: Item;
}
export default function MovieCard(props: Props): JSX.Element {
  const { id, title, description, price, thumbnail } = props.data;

  const history = useHistory();
  const { product, ...rest } = parseQuery();

  const [image, setImage] = useState(thumbnail);

  useEffect(() => {
    setImage(thumbnail);
  }, [thumbnail]);

  const onImageClick = () => {
    const restQuery = convertQueryToString(rest);
    history.push({ search: `product=${id}${restQuery}` });

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="movie-card">
      <div className="img-wrapper" onClick={onImageClick}>
        <img
          src={image}
          alt="movie-image"
          onError={() => setImage(errorImageUrl)}
        />
      </div>
      <div className="description">
        <div className="title">
          <p>{title}</p>
          <Tag>${price}</Tag>
        </div>
        <div className="info">{description}</div>
      </div>
    </div>
  );
}
