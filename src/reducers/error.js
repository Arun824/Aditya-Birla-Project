export const errorState = {}

export const errorReducer = (state = errorState, action) => {
  switch (action.type) {
    case "FAILED":
        return  {msg:"Something unexpected!!", error:{...action.payload}};
    default:
      return state;
  }
};
