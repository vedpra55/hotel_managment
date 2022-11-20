import React from "react";
import Image from "next/image";

export default function CategoriesList() {
  return (
    <div className=" container mx-auto max-w-screen-2xl">
      <div className="flex justify-between gap-x-5 lg:mt-5 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-400 py-5 overflow-x-scroll">
        {Array.from(Array(10)).map((item, i) => (
          <div key={i} className="flex flex-col gap-y-2  items-center">
            <div className="relative w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48">
              <Image
                sizes="20vh"
                alt="images"
                fill
                className="w-full h-full  object-cover rounded-full"
                src={
                  "https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
              />
            </div>
            <p>Family</p>
          </div>
        ))}
      </div>
    </div>
  );
}
