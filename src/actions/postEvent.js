import connector, { proxy } from "../adapters/xhr";

export const postEvent = (callid, key, val, dispatch) => {
  let connect = connector();
  let postdata = {
    event_key: key,
    event_val: val,
  };
  if (import.meta.env.MODE !== "development")
    connect
      .post( "visapp/"+callid+"/submit/v1", postdata)
      .then((res) =>
        dispatch({ type: "POST_EVENT_SUCCESS", payload: res.data })
      )
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("POST", "visapp/"+callid+"/submit/v1", postdata)
      .then((res) =>
        dispatch({ type: "POST_EVENT_SUCCESS", payload: res.data })
      )
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default postEvent;
