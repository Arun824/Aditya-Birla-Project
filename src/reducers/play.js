export const playState = {};

export const playReducer = (state = playState, action) => {
  switch (action.type) {
    case "PLAY_SUCCESS":
      return {callback:action.payload};
    default:
      return state;
  }
};