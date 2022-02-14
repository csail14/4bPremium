import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ThemeReducer from "./themeReducer";
import EventReducer from "./eventReducer";
import LangReducer from "./langReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  theme: ThemeReducer,
  agenda: EventReducer,
  lang: LangReducer,
});

export default rootReducer;
