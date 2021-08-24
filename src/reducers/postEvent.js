export const postEventState = {callback:"Post event loading..."};

export const postEventReducer = (state = postEventState, action) => {
  switch (action.type) {
    case "POST_EVENT_SUCCESS":
      return {callback:action.payload};
    default:
      return state;
  }
};