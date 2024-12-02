import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
// import createDebugger from 'redux-flipper';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { reduxStorage } from '@/utils/mmkv';

import { apiSlice } from './apiSlice';
import loginReducer from './login/loginReducer';


const middleware = [apiSlice.middleware];
// middleware.push(createDebugger());

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  login: loginReducer,

});

const persistConfig = {
  key: 'redux',
  version: 1,
  storage: reduxStorage,
  whitelist: ['login'],
  timeout: 0,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// disabled this line because of this is only useful in the test cases
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setupStore = (preloadedState: any) =>
  configureStore({
    reducer: persistedReducer,
    preloadedState,
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(middleware),
  });

export const store = setupStore({});

export const persistor = persistStore(store);
export const storeValues = store.getState();
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
