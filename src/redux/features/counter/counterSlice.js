import { createSlice } from "@reduxjs/toolkit";
const date = new Date();
const currentYear = date.getFullYear();
const initialState = [
  {
    id: 1,
    year: +currentYear - 1,
    totalValue: 0,
    returnValue: 0,
  },
];

const calculateTotalValue = (
  initialValue = 0,
  mInvest,
  mGrow,
  totalMonth = 12
) => {
  let total = initialValue;
  for (let i = 1; i <= totalMonth; i++) {
    total += (total * mGrow) / 100 + mInvest;
  }
  return Math.ceil(total);
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    calculate: (state, actions) => {
      if (state.length > 5) {
        state.length = 0;
      }
      let initialValue = 0;
      for (let i = 1; i <= actions.payload.year; i++) {
        const calTotalValue = calculateTotalValue(
          initialValue,
          +actions.payload.monthlyInvest,
          +actions.payload.monthlyGrow,
          12
        );
        initialValue = calTotalValue;
        const item = {
          id: state.length + 1,
          year: +currentYear + i,
          // m * (1 + r)^12 - m

          totalValue: calTotalValue,
          returnValue: Math.ceil(
            (calTotalValue * actions.payload.monthlyGrow) / 100
          ),
        };
        state.push(item);
      }
    },
  },
});

export const { calculate } = counterSlice.actions;

export default counterSlice.reducer;
