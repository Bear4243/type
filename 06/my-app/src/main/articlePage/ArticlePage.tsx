import React from "react";
import { ArticlePageBtnCreate } from "./articlePageBtnCreate/ArticlePageBtnCreate.tsx";
import "./articlePage.css";

interface Props {
  currentPage: number;
  SetCurrentPage: (value: Number) => void;
  totalCount: number;
}
export function ArticlePage({
  currentPage,
  SetCurrentPage,
  totalCount,
}: Props) {
  return (
    <div id="articlePage">
      <button className="buttonExtra">{"<"}</button>
      <ArticlePageBtnCreate
        currentPage={currentPage}
        SetCurrentPage={SetCurrentPage}
        totalCount={totalCount}
      />
      <button className="buttonExtra">{">"}</button>
    </div>
  );
}
