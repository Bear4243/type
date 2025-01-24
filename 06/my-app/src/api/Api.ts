export const url = new URL("https://panda-market-api.vercel.app/products");
const headers = {
  "Content-Type": "application/json",
};
interface post {
  page: number;
  pageSize: number;
  orderBy: string;
  body: string;
  data: string;
  createdAt: string;
}

async function getProductListInquiry(
  page = 1,
  pageSize = 10,
  orderBy = "recent"
): Promise<post[]> {
  try {
    const response = await fetch(
      `${url}?page=${page}&pageSize=${pageSize}&limit=3&orderBy=${orderBy}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: post[] = await response.json();
    console.log("getProductListInquiry data : ", data);
    return data;
  } catch (err) {
    console.log("getProductListInquiry err : ", err);
    // 요놈 때문에 오류 난거구만
    return Promise.reject(err);
  }
}

export const apiList = {
  getProductListInquiry,
};
