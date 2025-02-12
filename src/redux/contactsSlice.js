import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact(state, action) {
      const exists = state.items.some(
        (contact) =>
          typeof contact.name === "string" &&
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (!exists) {
        state.items.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });
      } else {
        alert("Contact with this name already exists!");
      }
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const selectContacts = (state) => state.contacts.items;
export default slice.reducer;
