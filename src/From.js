import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { calculate } from "./redux/features/counter/counterSlice";

const From = () => {
  const [monthlyInvest, setMonthlyInvest] = useState(500);
  const [monthlyGrow, setMonthlyGrow] = useState(10);
  const [totalYear, setTotalYear] = useState(30);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      calculate({
        monthlyInvest,
        monthlyGrow,
        year: +totalYear + 1,
      })
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="block">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Monthly Invest
          </span>
          <input
            type="number"
            name="number"
            value={monthlyInvest}
            onChange={(event) => setMonthlyInvest(event.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Monthly Invest"
          />
        </label>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Monthly Grow (%)
          </span>
          <input
            type="number"
            name="number"
            value={monthlyGrow}
            onChange={(event) => setMonthlyGrow(event.target.value)}
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Monthly Grow (%)"
          />
        </label>
        <label className="block mt-4">
          <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
            Year
          </span>
          <input
            type="number"
            name="number"
            value={totalYear}
            onChange={(event) => setTotalYear(event.target.value)}
            max="50"
            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="How many Year You want to calculate (Max 50)"
          />
        </label>
        <button className="bg-gray-400 text-black font-bold py-2 px-4 mt-4 mx-auto rounded">
          Calculate
        </button>
      </form>
    </>
  );
};

export default From;
