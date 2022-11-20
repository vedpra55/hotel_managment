import React from "react";

export default function WelcomeOffer() {
  return (
    <div className="flex flex-col items-center my-10 lg:my-20 gap-y-3">
      <p>Welcome Offer</p>
      <h5 className=" text-center md:text-left px-2 text-2xl md:text-4xl font-bold">
        Instant Get 30% Discount On Your Booking{" "}
      </h5>
      <p className=" text-center max-w-screen-2xl px-2 md:px-10 lg:px-40 mt-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea
      </p>
      <div className="flex  relative">
        <input
          className="bg-gray-300 w-80 sm:w-[30rem] outline-none px-10 h-16  rounded-lg mt-10"
          type={"text"}
        />
        <button className=" px-5 absolute top-14 left-48 sm:left-80 py-1 rounded-lg bg-mainLight">
          Contact us
        </button>
      </div>
    </div>
  );
}
