import "./style.scss";
import React, { useState, useMemo, useEffect } from "react";
import { errorImageUrl } from "../../constants/basic";

interface Props {
  data: Item;
  onSearchClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export default function MovieDetails(props: Props): JSX.Element {
  const { data, onSearchClick } = props;
  const [isError, setIsError] = useState(false);

  const {
    title,
    discountPercentage,
    description,
    price,
    brand,
    rating,
    thumbnail,
  } = data;

  const { bundlePrice, savedPrice, percentage } = useMemo(() => {
    const savedPrice = Math.round(price * discountPercentage) / 100;
    const bundlePrice = price - savedPrice;
    const percentage = Math.round(discountPercentage * 100) / 100;

    return { bundlePrice, savedPrice, percentage };
  }, [price]);

  const image = useMemo(() => {
    if (isError) return errorImageUrl;
    return thumbnail ?? errorImageUrl;
  }, [thumbnail, isError]);

  useEffect(() => {
    setIsError(false);
  }, [thumbnail]);

  return (
    <div className="movie-detail">
      <div className="nav">
        <div className="app-name">Logo</div>
        <span className="search material-icons" onClick={onSearchClick}>
          search
        </span>
      </div>
      <div className="content">
        <div className="img-wrapper">
          <img src={image} alt="movie-image" onError={() => setIsError(true)} />
        </div>
        <div className="right-content">
          <div className="header">
            <p className="title">{title}</p>
            {rating ? (
              <div className="rating">
                <p>{rating}</p>
              </div>
            ) : undefined}
          </div>
          <div className="brand">{brand}</div>
          <div className="overview">
            <p>
              Bundle List Price: <s>${price}</s>
            </p>
            <p>
              Bundle Price: <span className="price-title">${bundlePrice}</span>
            </p>
            <p>
              You Save:{" "}
              <span className="price-title">
                {savedPrice} ({percentage}%)
              </span>
            </p>
          </div>
          <div className="overview">{description}</div>
        </div>
      </div>
    </div>
  );
}
