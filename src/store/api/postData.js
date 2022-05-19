import axios from "axios";
import getHeaders from "./utils/getHeaders";
import errorProvider from "./utils/errorProvider";
import dataProvider from "./utils/dataProvider";
import updateToken from "./utils/updateToken";

async function postData(point = "", body = {}, property = {}) {
  let data = {};
  body && 
    await updateToken();
  await axios
    .post(`${process.env.REACT_APP_APIv1}${point}`, body, {
      headers: getHeaders(),
      withCredentials: true,
    })
    .then((res) => {
      data = dataProvider(res);
    })
    .catch((error) => {
      error.response?.status === 500 && alert(`Status 500. Server Problem`);
      const res = errorProvider(error);
      if (res) data = res;
    });
  return data;
}

export default postData;
