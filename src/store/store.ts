import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import userIsDarkModeSlice from '@/store/slices/darkModeSlice';
import { persistReducer, persistStore } from 'redux-persist';

const PERSIST_CONFIG = {
  key: 'root',
  storage,
  whitelist: ['isDarkMode'],
};

const MIDDLEWARE_CONFIG = {
  serializableCheck: {
    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
  },
};

const rootReducer = combineReducers({
  isDarkMode: userIsDarkModeSlice,
});

const persistedReducer = persistReducer(PERSIST_CONFIG, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(MIDDLEWARE_CONFIG),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
