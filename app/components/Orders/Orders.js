import React from "react";
import Image from "next/image";

// helpers
import { truncateText } from "@/app/helpers";

// images
import earphones from "../../assets/images/earphones.png";

// icons
import ArrowUpRightIcon from "@/app/assets/ArrowUpRightIcon";

const headers = [
  "Product",
  "Date",
  "Time spent",
  "Order Value",
  "Commission",
  "",
];

const products = [
  {
    id: 1,
    productImage: earphones,
    productName: "Product Name 1",
    dateAndTime: {
      date: "24 April '2024",
      time: "10:24 AM",
    },
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
  {
    id: 2,
    productImage: earphones,
    productName: "Product Name 1",
    dateAndTime: {
      date: "24 April '2024",
      time: "10:24 AM",
    },
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
  {
    id: 3,
    productImage: earphones,
    productName: "Product Name 1",
    dateAndTime: {
      date: "24 April '2024",
      time: "10:24 AM",
    },
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
  {
    id: 4,
    productImage: earphones,
    productName: "Product Name 1",
    dateAndTime: {
      date: "24 April '2024",
      time: "10:24 AM",
    },
    timeSpent: "2h 5m",
    orderValue: "$120,21",
    commission: "$55",
  },
];

export default function Orders() {
  return (
    <div>
      <p className="text-3xl font-medium">Orders</p>

      <div className="my-10">
        <table className="w-full border-collapse text-left font-sans border border-gray-300">
          <thead>
            <tr className="border-b border-gray-300 bg-gray-50 py-2.5">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="p-2.5 text-sm font-normal text-gray-600"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product, rowIndex) => (
              <tr key={rowIndex} className="h-20">
                <td className="p-2.5 flex items-center gap-3">
                  <Image
                    src={product.productImage}
                    alt=""
                    className="w-10 h-auto"
                  />
                  <p>{truncateText(product.productName, 12)}</p>
                </td>
                <td className="p-2.5">
                  <p>{product.dateAndTime.date}</p>
                  <p className="text-xs">{product.dateAndTime.time}</p>
                </td>
                <td className="p-2.5">{product.timeSpent}</td>
                <td className="p-2.5">{product.orderValue}</td>
                <td className="p-2.5 font-bold">{product.commission}</td>
                <td className="p-2.5 flex items-center gap-2 cursor-pointer">
                  <p className="text-xs text-gray-400">View Chat</p>
                  <ArrowUpRightIcon />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
