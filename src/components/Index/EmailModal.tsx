import React, { type Dispatch } from "react";

type Props = {
  isEmailModalOpen: boolean;
  setIsEmailModalOpen: Dispatch<boolean>;
};

const EmailModal = ({ setIsEmailModalOpen, isEmailModalOpen }: Props) => {
  return (
    <div
      className={`left-1/2 top-1/2 w-4/5 -translate-x-1/2 -translate-y-1/2 gap-2 px-4 md:w-1/2 xl:w-1/3 ${
        isEmailModalOpen
          ? `absolute flex flex-col  rounded-lg bg-purple-600`
          : `hidden`
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="white"
        className="ml-auto mt-1 h-6 w-6 cursor-pointer"
        onClick={() => {
          setIsEmailModalOpen(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <div className="flex flex-col items-center gap-2 pb-8 md:flex-row">
        <input
          type="email"
          placeholder="Type your email here"
          autoComplete="true"
          name="email"
          className="rounded-md px-2 py-2 pr-8"
        />
        <button className="rounded-lg bg-[#0101ff] px-6 py-2 font-semibold text-white">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default EmailModal;
