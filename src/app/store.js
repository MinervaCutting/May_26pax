import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/DarkModeSlice";
import tabOptionReducer from "../features/TabOptionSlice";
import bodyReducer from "../features/BodySlice";

export default configureStore({
  reducer: {
    darkMode: darkModeReducer,
    tabOption: tabOptionReducer,
    body: bodyReducer,
  },
});
