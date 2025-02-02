import { createSlice } from "@reduxjs/toolkit";

type ControlUIState = {
  sidebar: {
    isOpen: boolean;
  };
  userBar: {
    isOpen: boolean;
  };
  search: {
    isOpen: boolean;
    isFoucused: boolean;
    searchValue: string;
    currentPage: number;
  };
};

const initialState: ControlUIState = {
  sidebar: {
    isOpen: false,
  },
  userBar: {
    isOpen: false,
  },
  search: {
    isOpen: false,
    isFoucused: false,
    searchValue: "",
    currentPage: 1,
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
    toogleSearch: (state) => {
      state.search.isOpen = !state.search.isOpen;
    },
    closeSearch: (state) => {
      state.search.isOpen = false;
    },
    openSearch: (state) => {
      state.search.isOpen = true;
    },
    foucusSearch: (state) => {
      state.search.isFoucused = true;
    },
    blurSearch: (state) => {
      state.search.isFoucused = false;
    },
    setSearchValue: (state, action) => {
      state.search.searchValue = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.search.currentPage = action.payload;
    },
  },
});

export const actions = controlUISlice.actions;
export default controlUISlice.reducer;
