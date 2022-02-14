import { LOAD_LANG } from "./actions-type";

export const loadLang = (lang) => {
  return function (dispatch) {
    dispatch({
      type: LOAD_LANG,
      payload: {
        lang: lang,
      },
    });
  };
};
