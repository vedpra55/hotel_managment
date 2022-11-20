import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function TopActivites() {
  const data = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1628048535525-6f52a4aeec4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Rafting",
      details: "This is new address of our property",
      price: 829,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Campaning",
      details: "This is new address of our property",
      price: 4566,
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1558980664-3a031cf67ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Bike Tripe",
      details: "This is new address of our property",
      price: 2145,
    },
  ];

  return (
    <div className=" container  max-w-screen-2xl mx-auto">
      <div className="mt-10 lg:mt-20 mb-5 px-2 md:px-5 lg:px-28">
        <div className="flex justify-between gap-x-5 items-center">
          <div className="flex gap-x-5 flex-wrap gap-y-5 lg:gap-x-10 items-center">
            <h4 className="text-3xl font-semibold">Top Activites</h4>
            <button className=" rounded-md bg-mainDark text-white px-5 py-1">
              Rishikesh
            </button>
            <button className=" rounded-md bg-mainDark text-white px-5 py-1">
              Leh
            </button>
            <button className=" rounded-md bg-mainDark text-white px-5 py-1">
              Location
            </button>
          </div>
          <div className="flex gap-x-2 items-center flex-nowrap">
            <p className="text-[15px] whitespace-nowrap lg:text-[18px]">
              View All
            </p>
            <ArrowRightIcon className="w-4 lg:w-6" />
          </div>
        </div>
        <div className="grid grid-cols-12  gap-x-5 mt-10">
          <div className="col-span-12  h-[28rem]  md:col-span-6 row-span-full">
            <Card item={data[0]} />
          </div>
          <div className="col-span-12 mt-3 md:mt-0 md:col-span-6 h-[28rem] flex flex-col gap-y-3 md:gap-y-5">
            {data.slice(1, 3).map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <>
      <div className=" relative h-full ">
        <Image
          fill
          alt={item.name}
          className=" w-full h-full object-cover rounded-2xl"
          src={item.imgUrl}
        />
        <div className="absolute flex justify-between gap-x-3 flex-wrap gap-y-3 w-full items-center bottom-5 px-5">
          <div className="flex flex-col gap-y-1 text-white">
            <h4 className=" text-3xl font-bold">{item.name}</h4>
            <p>{item.details}</p>
          </div>
          <button className="bg-white text-black px-10 py-1 rounded-lg">
            {item.price}
          </button>
        </div>
      </div>
    </>
  );
}
