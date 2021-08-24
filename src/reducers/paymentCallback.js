export const paymentCallbackState = {};

export const paymentCallbackReducer = (state = paymentCallbackState, action) => {
  switch (action.type) {
    case "PAY_STATUS":
      return {...action.payload};
    default:
      return state;
  }
};