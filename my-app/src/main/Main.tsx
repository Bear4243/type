import React, { useEffect, useState } from "react";
import { ArticleBest } from "./articleBest/ArticleBest.jsx";
import { ArticleSell } from "./articleSell/ArticleSell.jsx";
import { ArticlePage } from "./articlePage/ArticlePage.jsx";
// import할 때는 뒤에 확장자명 .tsx지우기
import { apiList } from "../api/Api.js";
import "./main.css";

interface Product {
  id: number;
  name: string;
  price: number;
  images: string[];
  favoriteCount: number;
}

interface Props {
  list: Product[];
  totalCount: number;
}

export function Main(): Props {
  //pc : 1200px이상  tablet : 744px이상  mobile : 743px이하 375px이상
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // 훅에는 이렇게 쓰는거
  const [apiData, setApiData] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState("recent");
  const [totalCount, setTotalCount] = useState(0);
  const [favoriteApiData, setFavoriteApiData] = useState([]);
  const [favoriteApiPage, setFavoriteApiPage] = useState(1);
  const [favoriteApiPageSize, setFavoriteApiPageSize] = useState(4);
  const [favoriteApiOrderBy, setFavoriteApiOrderBy] = useState("favorite");

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("useEffect 실행 근데 Resize를 곁들인" + screenWidth);
    return () => {
      // cleanup
      window.removeEventListener("resize", handleResize);
      console.log(
        "useEffect 실행 근데 Resize를 곁들인 여긴 뭐 remove일때인거 같은데" +
          screenWidth
      );

      if (screenWidth >= 1200) {
        setPageSize(10);
        setFavoriteApiPageSize(4);
        console.log("1200이상" + pageSize);
      } else if (screenWidth < 1200 && screenWidth >= 744) {
        setPageSize(6);
        setFavoriteApiPageSize(2);
        console.log("744이상" + pageSize);
      } else if (screenWidth <= 743 && screenWidth > 375) {
        setPageSize(4);
        setFavoriteApiPageSize(1);
        console.log("375이상" + pageSize);
      }
    };
  }, [screenWidth]);

  useEffect(() => {
    console.log("useEffect 실행");
    const getApiData = async () => {
      try {
        console.log("API 실행");
        const response = await apiList.getProductListInquiry(
          page,
          pageSize,
          orderBy
        );
        const bestResponse = await apiList.getProductListInquiry(
          favoriteApiPage,
          favoriteApiPageSize,
          favoriteApiOrderBy
        );
        setApiData(response);
        setFavoriteApiData(bestResponse);
      } catch (error) {
        console.error(" Error :", error);
      }
    };

    getApiData();
  }, [page, pageSize, favoriteApiPageSize]);

  useEffect(() => {
    console.log("orderByUseEffect 실행");
    const weird = async () => {
      try {
        console.log("API 실행");
        const response = await apiList.getProductListInquiry(
          page,
          pageSize,
          orderBy
        );
        setApiData(response);
      } catch (error) {
        console.error(" Error :", error);
      }
    };
    weird();
  }, [orderBy]);

  // console.log("page 현재 페이지", page);

  if (!apiData) return <>데이터를 불러오는 중입니다...</>;

  return (
    <div id="main">
      <ArticleBest info={favoriteApiData.list}></ArticleBest>
      <ArticleSell
        info={apiData.list}
        selectedOption={orderBy}
        setSelectedOption={setOrderBy}
      ></ArticleSell>
      <ArticlePage
        totalCount={apiData.totalCount}
        currentPage={page}
        SetCurrentPage={setPage}
      ></ArticlePage>
    </div>
  );
}

/*
// UserCard.tsx
interface UserCardProps {
  name: string;
  email: string;
  role: "admin" | "user";
}

const UserCard: React.FC<UserCardProps> = ({ name, email, role }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <span>{role}</span>
    </div>
  );
};


/ 3. 이벤트 핸들러
interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

import { useState } from "react";

const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return { count, increment, decrement };
};
*/
