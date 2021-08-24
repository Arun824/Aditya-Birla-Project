import connector, { proxy } from "../adapters/xhr";

export const sendSMS = (callid, userid,templateType, dispatch) => {
  let connect = connector();

  let postdata = {
    callId: callid,
    templateType: templateType,
  };

  if (import.meta.env.MODE !== "development")
    connect
      .post(userid + "/sendsms/v1", postdata)
      .then((res) =>
        dispatch({ type: "POST_EVENT_SUCCESS", payload: res.data })
      )
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("POST", userid + "/sendsms/v1", postdata)
      .then((res) =>
        dispatch({ type: "POST_EVENT_SUCCESS", payload: res.data })
      )
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default sendSMS;
