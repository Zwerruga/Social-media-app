export const SCROLL_TYPES = {
  SCROLL: "SCROLL",
};

export const scrollToAction = (pageYOffset) => async (dispatch) => {
  dispatch({ type: SCROLL_TYPES.SCROLL, payload: pageYOffset });
};
