import connector, { proxy } from "../adapters/xhr";

export const paymentRecord = (billid, dispatch) => {
  let connect = connector();

  if (import.meta.env.MODE !== "development")
    connect
      .get("pay_status/"+billid)
      .then((res) => {
        dispatch({type:"PAY_STATUS",payload:res.data});
      })
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("GET","pay_status/"+billid)
      .then((res) => {
        dispatch({type:"PAY_STATUS",payload:res.data});
      })
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default paymentRecord;
