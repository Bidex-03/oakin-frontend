import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  mail: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.username = action.payload;
    },
    updateMail(state, action) {
      state.mail = action.payload;
    },
  },
});

export const { updateName, updateMail } = userSlice.actions;

export default userSlice.reducer;
