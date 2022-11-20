import React from "react";
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div className=" bg-hero w-full bg-cover  h-full bg-no-repeat">
      <div className="container mx-auto max-w-screen-2xl pt-5 pb-20">
        <div className="px-10 py-5">
          <div className="flex justify-between items-center">
            <h4 className="text-4xl font-bold text-white">Ocenox </h4>
            <div className="flex gap-x-10 items-center">
              <p className=" text-white font-medium hidden sm:block">Hotels</p>
              <p className=" text-white font-medium hidden sm:block">
                Activites
              </p>
              <button className="bg-white px-10 py-1 rounded-md">
                Call us
              </button>
            </div>
          </div>
        </div>
        <div className="mt-40 sm:mt-56 px-5 lg:px-10">
          <div className="flex justify-between flex-wrap gap-y-5 px-10 items-center bg-white py-5 w-full rounded-lg">
            <div className="flex gap-x-2 items-center">
              <MapPinIcon className="w-8 text-mainLight" />
              <input
                placeholder="Locator"
                className="w-40 outline-none focus:border-b "
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <CalendarDaysIcon className="w-8 text-mainLight" />
              <input
                placeholder="Date"
                className="w-40 outline-none focus:border-b "
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <ClipboardDocumentIcon className="w-8 text-mainLight" />
              <input
                placeholder="Property"
                className="w-40 outline-none focus:border-b "
              />
            </div>
            <button className=" bg-mainDark px-20 py-2 rounded-md text-white">
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className="mt-16 px-5">
          <div className="flex justify-between gap-y-5 flex-wrap md:flex-nowrap md:gap-x-3 lg:gap-x-5">
            <div className="gap-x-5 lg:gap-x-10 bg-white rounded-md  items-center flex w-full justify-between px-5 lg:px-10 py-3 ">
              <p className=" text-4xl font-semibold">%</p>
              <div className=" w-[2px] h-28 bg-black"></div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xl text-[#4b4949]">Get 20% OFF</p>
                <p className=" text-[14px]">
                  On your first booking get flat 20% off on every booking
                </p>
              </div>
            </div>
            <div className="gap-x-5  lg:gap-x-10 bg-white rounded-md  items-center flex w-full justify-between px-5 lg:px-10 py-3 ">
              <p className=" text-4xl font-semibold">%</p>
              <div className=" w-[2px] h-28 bg-black"></div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xl text-[#4b4949] uppercase">Trip Combo</p>
                <p className=" text-[14px]">
                  On your first booking get flat 20% off on every booking
                </p>
              </div>
            </div>
            <div className="gap-x-5  lg:gap-x-10 bg-white rounded-md  items-center flex w-full justify-between px-5 lg:px-10 py-3 ">
              <p className=" text-4xl font-semibold">%</p>
              <div className=" w-[2px] h-28 bg-black"></div>
              <div className="flex flex-col gap-y-2">
                <p className="text-xl text-[#4b4949]">Dinner free</p>
                <p className=" text-[14px]">
                  On your first booking get flat 20% off on every booking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
