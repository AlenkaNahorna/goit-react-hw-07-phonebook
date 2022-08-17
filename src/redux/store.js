import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { persistStore } from 'redux-persist';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
});

export const persistor = persistStore(store);
