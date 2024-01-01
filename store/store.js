import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    version:1,
    storage,
}

const reducer = combineReducers({
    cart: cartSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
})
