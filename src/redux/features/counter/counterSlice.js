import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    year: 2023,
    totalValue: 1000,
    return: 100,
  },
];

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    calculate: (state, actions) => {
      for (let i in actions.payload.year) {
        const item = {
          id: state.length + 1,
          year: +state[i] + 1,
          totalValue:
            (actions.payload.monthlyInvest *
              ((1 + actions.payload.monthlyGrow) ^ 11)) /
            actions.payload.monthlyGrow,
        };
        state.push(item);
      }
    },
  },
});

export const { calculate } = counterSlice.actions;

export default counterSlice.reducer;
