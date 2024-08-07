import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/slice";
import contactReducer from "./contacts/slice";
import filterReducer from "./filters/slice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth-token",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactReducer,
    filters: filterReducer,
  },
});

export const persistor = persistStore(store);
