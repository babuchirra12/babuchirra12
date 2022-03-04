import {configureStore} from '@reduxjs/toolkit';
import postSlice from './reducers/index';

export const store = configureStore({
    reducer: {
        posts: postSlice
    }
});


























// import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
// import {postSlice} from "../redux/action/action"
// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const logger = createLogger({
//   collapsed: true,
// });

// const persistConfig = {
//   key: "tef-react-appid",
//   version: 1,
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, postSlice);
// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//   getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRSTE, PAUSE, PURGE, REGISTER],
//       },
//     }).concat(logger),
//   devTools: process.env.NODE_ENV !== "production",
// });
