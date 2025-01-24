import React from "react";
import { ArticlePageBtnCreate } from "./articlePageBtnCreate/ArticlePageBtnCreate.tsx";
import "./articlePage.css";

interface Props {
  currentPage: number;
  SetCurrentPage: (value: number) => void;
  totalCount: number;
}
export function ArticlePage({
  currentPage,
  SetCurrentPage,
  totalCount,
}: Props): React.ReactElement {
  return (
    <div id="articlePage">
      <button
        className="buttonExtra"
        onClick={() => SetCurrentPage(currentPage - 1)}
      >
        {"<"}
      </button>
      {/* 이건 모르겠네 */}
      <ArticlePageBtnCreate
        currentPage={currentPage}
        SetCurrentPage={SetCurrentPage}
        totalCount={totalCount}
      />
      <button
        className="buttonExtra"
        onClick={() => SetCurrentPage(currentPage - 1)}
      >
        {">"}
      </button>
    </div>
  );
}
