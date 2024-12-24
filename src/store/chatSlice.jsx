import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    setMessage: (state, action) => {
      // Shift will help us In Keeping State lenghh upto 100 so once the 100 limit crossed old state will be deleted
      if (state.message.length >= 100) {
        state.message.shift(); // Remove the first (oldest) message
    }
      state.message.push(action.payload);
    },
  },
});
export const { setMessage } = chatSlice.actions;
export default chatSlice;
