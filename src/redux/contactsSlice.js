import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'components/api/getContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContacts();
      console.log(contacts);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);
console.log(fetchContacts());

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
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
  exstraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => (state.items = payload),
    [fetchContacts.pending]: state => (state.isLoading = true),
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['items'],
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
