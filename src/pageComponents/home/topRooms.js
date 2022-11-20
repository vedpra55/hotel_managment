import React from "react";
import { FaSwimmer } from "react-icons/fa";
import {
  ArrowRightIcon,
  WifiIcon,
  TvIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

export default function TopRooms() {
  const data = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Room",
      detail: "Details and address of room",
      price: "1256",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Room",
      detail: "Details and address of room",
      price: "1256",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Room",
      detail: "Details and address of room",
      price: "1256",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Room",
      detail: "Details and address of room",
      price: "1256",
    },
  ];

  return (
    <div className=" container  max-w-screen-2xl mx-auto">
      <div className="mt-10 lg:mt-20 mb-5 px-2 md:px-5 lg:px-28">
        <TopHeading />
        <div className="mt-10 grid grid-cols-12 gap-x-2 lg:gap-x-5 gap-y-5">
          {data.map((item, i) => (
            <div key={i} className="col-span-6 md:col-span-4 xl:col-span-3">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TopHeading() {
  return (
    <div className="flex justify-between gap-x-5 items-center">
      <div className="flex gap-x-5 flex-wrap gap-y-5 lg:gap-x-10 items-center">
        <h4 className="text-3xl font-semibold">Top Rooms</h4>
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
        <p className="text-[15px] whitespace-nowrap lg:text-[18px]">View All</p>
        <ArrowRightIcon className="w-4 lg:w-6" />
      </div>
    </div>
  );
}

function Card({ item }) {
  return (
    <div className=" bg-white w-full shadow-md rounded-lg">
      <div className=" relative w-full h-48">
        <Image
          fill
          sizes="50vh"
          className="w-full h-full object-cover rounded-lg"
          src={item.imgUrl}
          alt={item.name}
        />
      </div>
      <div className="px-5 flex flex-col  py-3">
        <p className="text-[13px]">Tag</p>
        <p className=" text-xl font-semibold">{item.name}</p>
        <p className=" text-gray-400">{item.detail}</p>
        <div className=" flex justify-between gap-x-3 gap-y-2 flex-wrap items-center mt-2">
          <p>$ {item.price}</p>
          <button className=" bg-mainLight px-3 rounded-md">Book Now</button>
        </div>
        <div className="w-full h-[1px] bg-black my-3"></div>
        <div className="flex justify-center gap-x-5 items-center">
          <WifiIcon className="w-4" />
          <TvIcon className="w-4" />
          <KeyIcon className="w-4" />
          <FaSwimmer className="w-4" />
        </div>
      </div>
    </div>
  );
}
