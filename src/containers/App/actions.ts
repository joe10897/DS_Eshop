import { SET_LOCALE, SET_THEME } from "./constants";

export const setLocale = (locale) => (dispatch) => {
  dispatch({ type: SET_LOCALE, payload: locale });
};

export const setTheme = (theme) => (dispatch) => {
  dispatch({ type: SET_THEME, payload: theme });
};
