export const url = new URL("https://panda-market-api.vercel.app/products");
const headers = {
  "Content-Type": "application/json",
};

async function getProductListInquiry(
  page: Number = 1,
  pageSize: Number = 10,
  orderBy: String = "recent"
) {
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
    const data = await response.json();
    console.log("getProductListInquiry data : ", data);
    return data;
  } catch (err) {
    console.log("getProductListInquiry err : ", err);
  }
}

/// 쓰게 되면 봉인 해제
// const postProductRegistration = async (params) => {
//   try {
//     const response = await fetch(`${url}`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(params),
//     });
//     const data = await response.json();
//     console.log("postProductRegistration Data : " + JSON.stringify(data));
//     return data;
//   } catch (error) {
//     console.log("postProductRegistration Error : " + error);
//   }
// };

export const apiList = {
  getProductListInquiry,
  // postProductRegistration,
};
