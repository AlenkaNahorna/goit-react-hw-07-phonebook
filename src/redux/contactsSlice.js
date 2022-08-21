import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from 'api/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contactsApi = await getContacts();
      console.log(contactsApi);
      return contactsApi;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addItem = createAsyncThunk(
  'contacts/addItem',
  async (contact, { rejectWithValue }) => {
    try {
      const data = addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    filter: '',
  },
  reducers: {
    filterItems: (state, action) => {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: {
    [fetchContacts.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
        isLoading: false,
      };
    },

    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [addItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [addItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
        isLoading: false,
      };
    },

    [addItem.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },

    [deleteItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    },
    [deleteItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: state.items.filter(contact => contact.id !== action.payload),
        isLoading: false,
      };
    },

    [deleteItem.rejected]: (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;
