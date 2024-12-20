import React from "react";

const headers = ["Product", "Date", "Time spent", "Order Value", "Commission"];
const rows = [
  ["Row 1, Col 1", "Row 1, Col 2", "Row 1, Col 3"],
  ["Row 2, Col 1", "Row 2, Col 2", "Row 2, Col 3"],
];

export default function Orders() {
  return (
    <div>
      <p className="text-3xl font-medium">Orders</p>

      <div className="my-10">
        <table className="w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#f4f4f4] border-b-2 border-[#ddd]">
              {headers.map((header, index) => (
                <th key={index} className="p-2.5 border border-[#ccc]">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${
                  rowIndex % 2 === 0 ? "bg-[#f9f9f9]" : "bg-white"
                } border-b border-[#ddd]`}
              >
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-2.5 border border-[#ccc]">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
