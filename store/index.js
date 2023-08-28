import { configureStore, createSlice } from "@reduxjs/toolkit";

//redux
const initialCounter = { counter: 0, totalNum: 0, startTime: 0, endTime: 0, totalTime: 0 };
const initialHiragana = {
  hiraganas: []
}

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounter,
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

const hiraganaSlice = createSlice({
  name: "hiragana",
  initialState: initialHiragana,
  reducers: {
    setHiraganas(state, action) {
      // console.log(state);
      return {
        ...state,
        hiraganas: [...state.hiraganas, action.payload]
      };
    }
  }
})

const store = configureStore({
  reducer: { counter: counterSlice.reducer, hiragana: hiraganaSlice.reducer }
});

export const counterActions = counterSlice.actions;
export const hiraganaActions = hiraganaSlice.actions;
export default store;
