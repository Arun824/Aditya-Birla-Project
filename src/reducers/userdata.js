export const userState = {}


export const userdataReducer = (state = userState, action) => {
  switch (action.type) {
    case "USERDATA_SUCCESS":
      return { ...action.payload };
    default:
      return state;
  }
};
