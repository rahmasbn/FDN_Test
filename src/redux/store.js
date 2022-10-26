import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import logger from "redux-logger";
import { reducers } from "src/redux/reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
});

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
