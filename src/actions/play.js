import connector, { proxy } from "../adapters/xhr";

export const play = (callid, name, dispatch) => {
  let connect = connector();
  if (import.meta.env.MODE !== "development")
    connect
      .get("visapp/"+callid + "/play/" + name)
      .then((res) => dispatch({ type: "PLAY_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
  else
    proxy("GET", "visapp/"+callid + "/play/" + name)
      .then((res) => dispatch({ type: "PLAY_SUCCESS", payload: res.data }))
      .catch((err) => dispatch({ type: "FAILED", payload: err }));
};
export default play;