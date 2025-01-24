import React, { useEffect, useState } from "react";
import { ArticleBest } from "./articleBest/ArticleBest.jsx";
import { ArticleSell } from "./articleSell/ArticleSell.jsx";
import { ArticlePage } from "./articlePage/ArticlePage.jsx";
// import할 때는 뒤에 확장자명 .tsx지우기
import { apiList } from "../api/Api.js";
import "./main.css";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   images: string[];
//   favoriteCount: number;
//   list: string[];
//   totalCount: string;
// }

interface post {
  page: number;
  pageSize: number;
  orderBy: string;
  body: string;
  data: string;
  createdAt: string;
}

interface Props {
  info: post[];
  totalCount: number;
  setSelectedOption: (parameter: string) => string;
  currentPage: number;
}

export function Main(): Props | React.ReactElement {
  //pc : 1200px이상  tablet : 744px이상  mobile : 743px이하 375px이상
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  // 훅에는 이렇게 쓰는거
  const [apiData, setApiData] = useState<post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [orderBy, setOrderBy] = useState<string>("recent");
  const [totalCount, setTotalCount] = useState<number>(0);
  const [favoriteApiData, setFavoriteApiData] = useState<post[]>([]);
  const [favoriteApiPage, setFavoriteApiPage] = useState<number>(1);
  const [favoriteApiPageSize, setFavoriteApiPageSize] = useState<number>(4);
  const [favoriteApiOrderBy, setFavoriteApiOrderBy] =
    useState<string>("favorite");

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
        const response: post[] = await apiList.getProductListInquiry(
          page,
          pageSize,
          orderBy
        );
        const bestResponse: post[] = await apiList.getProductListInquiry(
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
