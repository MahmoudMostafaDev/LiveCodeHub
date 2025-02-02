import controlUISlice from "@/features/controlUI/controlUISlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    controUI: controlUISlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
