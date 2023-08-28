import { configureStore, createSlice } from "@reduxjs/toolkit";

//redux
const initialState = { counter: 0, totalNum: 0, startTime: 0, endTime: 0, totalTime: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    setCounter(state, action) {
      state.counter = action.payload;
    },
    setTotalNum(state, action) {
      state.totalNum = action.payload;
    },
    setStartTime(state, action) {
      state.startTime = action.payload;
    },
    setEndTime(state, action) {
      state.endTime = action.payload;
    },
    setTotalTime(state) {
      if (state.endTime >= state.startTime) {
        state.totalTime = (state.endTime - state.startTime).toFixed(3);
      } else {
        state.totalTime = 0;
      }
    }
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
