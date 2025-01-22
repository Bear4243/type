// 뭔지 몰라도 React 요놈 써주기
import React, { useState, ChangeEvent } from "react";
import "./articleSellDropDown.css";

interface Props {
  selectedOption: string;
  setSelectedOption: (parameter: string) => void;
}
// React.FC 리액트에서 함수형 컴포넌트를 정의 할 때 사용
export const ArticleSellDropDown: React.FC<Props> = ({
  selectedOption,
  setSelectedOption,
}) => {
  // ChangeEvent<HTMLSelectElement> 리엑트에서 지원하는 머시기 <select> 요놈이 변경되면 나오는 이벤트
  // 그래서 타입을 뭐라고 지정된거지? 아무튼 오류 안나네
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.currentTarget.value);
  };
  return (
    <div id="articleSellDropDown">
      <select
        value={selectedOption}
        onChange={handleChange}
        id="orderProductSelect"
        style={{
          backgroundImage: "url(/img/ic_arrow_down.png)",
        }}
      >
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>

      <select
        onChange={handleChange}
        id="orderProductSelectMobile"
        style={{
          backgroundImage: "url(/img/ic_sort.png)",
        }}
      >
        <option value="recent">최신순</option>
        <option value="favorite">좋아요순</option>
      </select>
    </div>
  );
};
