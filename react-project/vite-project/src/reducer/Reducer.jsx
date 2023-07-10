export const SET_COLOR_TYPES = "SET_COLOR";

export const colorReducer = (state, action) => {
  switch (action.type) {
    case SET_COLOR_TYPES:
      return [...state, action.color];
    default:
      return state;
  }
};
