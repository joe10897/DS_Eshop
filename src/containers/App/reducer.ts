import produce from "immer";

import { CLEAN_UP, SET_LOCALE, SET_THEME } from "./constants";
import { getBrowserLanguage } from "../../translations";

const initialState = {
  locale: getBrowserLanguage(),
  theme: "light",
  userRole: 0,
};

export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload } = action;
    switch (type) {
      case SET_LOCALE:
        draft.locale = payload;
        break;
      case SET_THEME:
        draft.theme = payload;
        break;
      case CLEAN_UP:
        draft = { ...initialState };
        break;
      default:
        return draft;
    }
  });
