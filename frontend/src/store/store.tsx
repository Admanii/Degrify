import { Action, combineReducers } from "redux";
// import reducer from "./bugsSlice";
import {
    configureStore,
    getDefaultMiddleware,
    ThunkAction,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import axiosInstance from "./service/api";
import { persistReducer, persistStore } from "redux-persist";

const middleware = [
    ...getDefaultMiddleware({
        thunk: {
            extraArgument: { axios: axiosInstance },
        },
        serializableCheck: false,
    }),
];

export const allReducers = combineReducers({
    //   auth: authSlice,
    //   degree: degreeSlice,
});
const persistConfig = {
    key: "root",
    storage,
};
const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
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
