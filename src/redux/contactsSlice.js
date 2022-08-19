import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts } from 'components/api/getContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contactsApi = await getContacts();
      console.log(contactsApi);
      return contactsApi;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

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
    [fetchContacts.rejected]: (state, action) => (state.error = action.payload),
  },
});

export const { addItem, deleteItem, filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
