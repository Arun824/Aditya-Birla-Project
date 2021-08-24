export const hangUpState = {}

export const hangUpReducer = (state = hangUpState, action) => {
  switch (action.type) {
    case "HANGUP_SUCCESS":
      return {...state};
    default:
      return state;
  }
};
