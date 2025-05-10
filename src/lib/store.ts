import { configureStore } from "@reduxjs/toolkit";
import metaReducer from "./features/metaSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      meta: metaReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];