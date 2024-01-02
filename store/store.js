import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/es/storage';
import authSlice from "./authSlice";


const persistConfig = {
    key: 'root',
    version:1,
    storage,
    timeout: null,
}

const reducer = combineReducers({
    cart: cartSlice,
    user: authSlice
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),

})
