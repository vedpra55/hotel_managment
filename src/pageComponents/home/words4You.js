import Image from "next/image";
import React from "react";

export default function Words4You() {
  return (
    <div className="bg-mainLight/50  mt-10 lg:mt-20 mb-5 w-full ">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-12 py-10 px-2 md:px-5 lg:px-28">
          <div className="col-span-12 sm:col-span-6">
            <p>Words of you</p>
            <p className="px-10 font-serif mt-5 leading-8">
              Great location, really pleasant and clean rooms, but the thing
              that makes this such a good place to stay are the staff. All of
              the people are incredibly helpful and generous with their time and
              advice. We travelled with two six year olds and lots of luggag
              Great location, really pleasant and clean rooms, but the thing
              that makes this such a good place to stay are the staff. All of
              the people are incredibly helpful and generous with their time and
              advice. We travelled with two six year olds and lots of luggag
            </p>
            <p className="px-10 mt-2 font-medium">Rita Roy</p>
            <p className="px-10 mt">Food blogger</p>
          </div>
          <div className="flex mt-5  md:mt-0 justify-center sm:justify-end items-start col-span-12 sm:col-span-6">
            <div className=" relative w-80 h-80 rounded-xl">
              <Image
                className="w-full h-full object-cover rounded-xl shadow-md"
                alt="iamge"
                fill
                src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
