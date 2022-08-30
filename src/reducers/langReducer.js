import { LOAD_LANG } from "../actions/lang/actions-type";

const initialState = {
  value: null,
};

const LangReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LANG:
      return {
        value: action.payload.lang,
      };
      break;
    default:
      return state;
  }
};
export default LangReducer;
