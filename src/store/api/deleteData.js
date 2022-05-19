import axios from "axios";
import getHeaders from "./utils/getHeaders";
import errorProvider from "./utils/errorProvider";
import dataProvider from "./utils/dataProvider";
import updateToken from "./utils/updateToken";

async function deleteData(point = "", body = {}) {
  let data = {};
  await updateToken();
  await axios
    .delete(`${process.env.REACT_APP_APIv1}${point}`, {
      headers: getHeaders(),
    })
    .then((res) => {
      data = dataProvider(res);
    })
    .catch((error) => {
      error.response?.status === 500 && 
        alert(`Status 500. Server Problem`);
      const res = errorProvider(error);
      if (res) data = res;
    });
  return data;
}

export default deleteData;
