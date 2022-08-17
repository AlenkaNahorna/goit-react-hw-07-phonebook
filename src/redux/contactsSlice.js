import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addItem(state, action) {
      state.items = [action.payload, ...state.items];
    },
    deleteItem(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterItems(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
