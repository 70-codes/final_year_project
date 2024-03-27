import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  tokens: [],
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => {
      const token = {
        id: nanoid,
        text: action.payload,
      };
      state.tokens.push(token);
    },
    deleteToken: (state, action) => {
      state.tokens = state.tokens.filter(
        (token) => token.id !== action.payload
      );
    },
  },
});

export const { addToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
