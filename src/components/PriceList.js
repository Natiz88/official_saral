import React from "react";
import PriceListDetails from "./PriceListData";

const PriceList = () => {
  const trStyle = "text-center";
  const tdStyle = " text-sm p-[0.5rem] m-1";
  const quantityRange = "text-right font-semibold p-1 m-1";
  const thStyle = "p-1 py-[0.5rem] m-1 text-[]";
  return (
    <div className="shadow-lg">
      <div className="bg-[#1874D1] text-center text-white text-[26px]">
        Price List
      </div>
      <table className="bg-white w-full ">
        <tr className={`${trStyle} border-[#1874D1] border-b-[2px]`}>
          <th className={thStyle}>Quantity Range</th>
          <th className={thStyle}>Normal Price(unit)</th>
          <th className={thStyle}>Urgent Price(unit)</th>
        </tr>
        {PriceListDetails.map((list) => {
          return(
            <tr className={`${trStyle} border-[#1874D1] border-t-[0.5px]`}>
            <td className={`${tdStyle} ${quantityRange}`}>{list.range}</td>
            <td className={tdStyle}>Rs. {list.normal.toFixed(2)}</td>
            <td className={tdStyle}>Rs. {list.urgent.toFixed(2)}</td>
          </tr>
          )
          })}
      </table>
    </div>
  );
};

export default PriceList;
