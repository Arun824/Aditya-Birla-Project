import connector, { proxy } from "../adapters/xhr";

const userData = (callid, fields, dispatch) => {
  let connect = connector();
  if (process.env.NODE_ENV !== "development")
    connect
      .get(callid + "/getUserData/v1?fields=" + fields)
      .then((res) => dispatch({ type: "USERDATA_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("GET", callid + "/getUserData/v1?fields=" + fields)
      .then((res) => dispatch({ type: "USERDATA_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default userData;
