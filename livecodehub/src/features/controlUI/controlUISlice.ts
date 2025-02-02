import { createSlice } from "@reduxjs/toolkit";

type ControlUIState = {
  sidebar: {
    isOpen: boolean;
  };
  userBar: {
    isOpen: boolean;
  };
};

const initialState: ControlUIState = {
  sidebar: {
    isOpen: false,
  },
  userBar: {
    isOpen: false,
  },
};

export const controlUISlice = createSlice({
  name: "controlUI",
  initialState,
  reducers: {
    toogleSidebar: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
    toogleUserBar: (state) => {
      state.userBar.isOpen = !state.userBar.isOpen;
    },
  },
});

export const actions = controlUISlice.actions;
export default controlUISlice.reducer;
