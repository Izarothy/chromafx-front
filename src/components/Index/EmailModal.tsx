import React, { type Dispatch } from "react";

type Props = {
  isEmailModalOpen: boolean;
  setIsEmailModalOpen: Dispatch<boolean>;
};

const EmailModal = ({ setIsEmailModalOpen, isEmailModalOpen }: Props) => {
  return (
    <div
      className={`left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-2 px-4 py-2 ${
        isEmailModalOpen
          ? `absolute flex flex-col rounded-lg bg-black text-gray-200`
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
      <span className="flex flex-col gap-4 px-4 pb-3">
        <label>
          <input
            type="email"
            className="rounded-lg px-2 py-1 text-sm text-gray-900 focus:outline-blue-500"
            placeholder="email@email.com"
            name="email"
          />
        </label>
        <button className="btn rounded-lg bg-purple-500 px-12 py-1 font-semibold">
          Send
        </button>
      </span>
    </div>
  );
};

export default EmailModal;
