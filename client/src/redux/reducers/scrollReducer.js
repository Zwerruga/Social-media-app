import { SCROLL_TYPES } from "../actions/scrollAction";

const initialState = 0;

const scrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCROLL_TYPES.SCROLL:
      return action.payload;
    default:
      return state;
  }
};

export default scrollReducer;
