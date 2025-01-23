const url = new URL("http://localhost:8000");
const headers = {
  "Content-Type": "application/json",
};

// 흠 아닌가?
interface Post = {
  name: string,
  price: number,
  description: string,
  tags: string,
  createdAt: string,
  img: string,
  body: string
};

/*
createdAt: "2025-01-20T02:34:48.921Z"
description: "개쩌는 청소기"
img: "/img/img_default.png"
like: 240name: "로봇 청소기"price: 1500000tags: "가전제품"updatedAt: "2025-01-20T02:34:48.921Z"__v: 0_id: "678db648cb1d
*/

const ProductList = async (currentPage = 1, limit = 10) => {
  try {
    const response = await fetch(
      `${url}item?limit=${limit}&currentPage=${currentPage}`,
      {
        method: "GET",
        headers,
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ProductList Error : ", error);
  }
};

const ProductRegister = async (params):Promise<Post[]> => {
  try {
    // 슬래쉬가 왜 포함이 되어 있어서 오류가 나는거지 어디서 슬래쉬가 추가가 된거지?
    const response = await fetch(`${url}register`, {
      method: "POST",
      headers,
      body: JSON.stringify(params),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("ProductRegister Error : ", error);
  }
};

export const apiList = {
  ProductList,
  ProductRegister,
};
