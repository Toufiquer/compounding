import React from "react";
import { useSelector } from "react-redux";
const formatMoney = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
const Table = () => {
  const totalCount = useSelector((state) => state.counter);
  console.log(totalCount, " => Line No: 6");
  let content;
  if (totalCount?.length === 1) {
    content = <h2 className={` border text-center`}>Nothing Was found</h2>;
  }
  if (totalCount?.length > 1) {
    const newCount = [...totalCount];
    newCount.splice(0, 1);
    content = newCount.map((i) => (
      <tr key={i.id} className="bg-gray-200"> 
        <td className="border px-4 py-2">{i.year}</td>
        <td className="border px-4 py-2">{formatMoney(i.totalValue)}</td>
        <td className="border px-4 py-2">{formatMoney(i.returnValue)}</td>
      </tr>
    ));
  }
  return (
    <>
      <table className="w-full table-auto text-center">
        <thead>
          <tr className="bg-gray-400">
            <th className="border px-4 py-2">Year</th>
            <th className="border px-4 py-2">Total Value</th>
            <th className="border px-4 py-2">Monthly Return</th>
          </tr>
        </thead>
        {totalCount?.length === 1 ? <>{content}</> : <tbody>{content}</tbody>}
      </table>
      {/* <tr className="bg-gray-200">
            <td className="border px-4 py-2">2024</td>
            <td className="border px-4 py-2">1000</td>
            <td className="border px-4 py-2">100</td>
          </tr> */}
    </>
  );
};

export default Table;
