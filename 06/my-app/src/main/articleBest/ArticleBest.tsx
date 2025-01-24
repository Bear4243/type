import React from "react";
import "./articleBest.css";

interface post {
  id: number;
  name: string;
  price: number;
  images: string;
  favoriteCount: number;
}

interface Props {
  info: post[];
  selectedOption: string;
  // set은 왠지 몰라도 이렇게 써야하네
  setSelectedOption: (value: string) => void;
}
export function ArticleBest({ info }: Props): React.ReactElement {
  if (info === undefined) {
    return <div>로딩중</div>;
  }
  return (
    <div id="articleBest">
      <p id="productBestTitle">베스트 상품</p>
      <div id="articleBestBox">
        {info.map((item, index) => {
          return (
            <div className="articleBestBoxContents">
              <div
                className="articleBestProductImg"
                style={{ backgroundImage: `url(${item.images})` }}
              ></div>
              <p className="articleBestProductName">{item.name}</p>
              <p className="articleBestProductPrice">{item.price}원</p>
              <div className="articleBestProductFavoriteCount">
                <img src="/img/ic_heart.png" alt="" />
                <p>{item.favoriteCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
