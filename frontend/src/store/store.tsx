import { Action, combineReducers } from "redux";
// import reducer from "./bugsSlice";
import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import axiosInstance from "./api";
import { persistReducer, persistStore } from "redux-persist";
import authSlice from "./slice/authSlice";
import degreeSlice from "./slice/degreeSlice";
import studentSlice from "./slice/studentSlice";
import organisationSlice from "./slice/organisationSlice";

const middleware = [
    ...getDefaultMiddleware({
        thunk: {
            extraArgument: { axios: axiosInstance },
        },
        serializableCheck: false,
    }),
];

// export const allReducers = combineReducers({
//     //   auth: authSlice,
//     //   degree: degreeSlice,
// });
// const persistConfig = {
//     key: "root",
//     storage,
// };
// const persistedReducer = persistReducer(persistConfig, allReducers);

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             thunk: {
//                 extraArgument: { axios: axiosInstance },
//             },
//             serializableCheck: false,
//         }),
// });
// export const persistor = persistStore(store);

export const allReducers = combineReducers({
    auth: authSlice,
    student: studentSlice,
    organisation: organisationSlice,
    degree: degreeSlice,
});
const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        thunk: {
          extraArgument: { axios: axiosInstance },
        },
        serializableCheck: false,
      }),
});

export const persistor = persistStore(store);
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export default store