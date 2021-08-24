import axios from "axios";

const URL = "https://cloud-dev.ubona.com/visapp/";
const HEADER = {
  "x-client-id": "abhi_claims_doc_collection",
  //"Access-Control-Allow-Origin": "*",  //comment out in prod
};

/* Default */
export default function connector() {
  // Set config defaults when creating the instance
  const instance = axios.create({
    baseURL: URL,
    headers: HEADER,
  });
  return instance;
}

/* Proxy */
export const proxy = (method, endPoint, data = {}) => {
  return axios.post(
    "https://6bkqegopkh.execute-api.ap-south-1.amazonaws.com/staging/proxy",
    {
      method: method,
      url: URL + endPoint,
      headers: HEADER,
      data,
    },
    { "Access-Control-Allow-Origin": "*" }
  );
};