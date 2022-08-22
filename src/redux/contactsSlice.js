import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { addContact, deleteContact, getContacts } from 'api/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contactsApi = await getContacts();
      return contactsApi;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk(
  'contacts/addItem',
  async (contact, { rejectWithValue }) => {
    try {
      await addContact(contact);
      const contactsApi = await getContacts();
      toast.success('Contact added!', {});
      return contactsApi;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteItem = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContact(id);
      const contactsApi = await getContacts();
      toast.success('Contact deleted!', {});
      return contactsApi;
    } catch (error) {
      return rejectWithValue(error.message);
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
      };
    },
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [fetchContacts.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    [addItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [addItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: [...action.payload],
      };
    },

    [addItem.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },

    [deleteItem.pending]: (state, _) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    [deleteItem.fulfilled]: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },

    [deleteItem.rejected]: (state, action) => {
      return {
        ...state,
        error: action.payload,
      };
    },
  },
});

export const { filterItems } = contactsSlice.actions;

export const getContact = state => state.contacts.items;
export const getFilterWord = state => state.contacts.filter;

export const contactsReducer = contactsSlice.reducer;