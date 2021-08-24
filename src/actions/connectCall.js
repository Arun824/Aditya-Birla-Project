import connector, { proxy } from "../adapters/xhr";

export const ConnectCall = (callid, name, dispatch) => {
  let connect = connector();
  if (import.meta.env.MODE !== "development")
    connect
      .get(callid + "/connect_to_agent/" + name)
      .then((res) => dispatch({ type: "PLAY_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("GET", callid + "/connect_to_agent/" + name)
      .then((res) => dispatch({ type: "PLAY_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default ConnectCall;
