'use client'

import { useEffect } from "react";
import { ListItem } from "@/libs/type";
export default function Home() {

  const content: ListItem[] = [];

  useEffect(() => {

  })

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Hello world
      <div className="">
        <table className="border-collapse border table-fixed w-1/2 text-center m-auto">
          <thead className="bg-gray-700 text-white">
            <tr>
              <td className="w-1/5">No</td>
              <td className="w-2/5">Name</td>
              <td className="w-2/5">Price</td>
            </tr>
          </thead>
          <tbody>
            {
              content.map((item, i) => {
                return (
                  <tr key={i}>
                    <td className="border p-4">{i + 1}</td>
                    <td className="border">{item.name}</td>
                    <td className="border">{item.price}</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>

  );
}
