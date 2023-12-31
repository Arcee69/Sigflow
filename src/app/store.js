import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/loginSlice";

    const persistConfig = {
        key: 'root',
        storage,
    };

    const rootReducer = combineReducers({
        userLogin: loginReducer,
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk]
    });

export const persistor = persistStore(store)

