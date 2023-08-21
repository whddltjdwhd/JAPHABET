import { configureStore, createSlice} from "@reduxjs/toolkit";

//redux
const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament(state) {
        state.counter++;
    },
  }
});

const store = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions;

export default store;