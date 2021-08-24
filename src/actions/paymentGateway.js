import connector, { proxy } from "../adapters/xhr";

export const paymentGateway = (callid, dispatch) => {
  let connect = connector();

  if (import.meta.env.MODE !== "development")
    connect
      .post(callid + "/pay/v1")
      .then((res) => {
        document.open();
        document.write(res.data);
        document.close();
      })
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("POST", callid + "/pay/v1")
      .then((res) => {
        document.open();
        document.write(res.data);
        document.close();
      })
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default paymentGateway;
