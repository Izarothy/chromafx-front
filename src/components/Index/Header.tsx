import Image from "next/image";
import React, { type Dispatch } from "react";

type Props = {
  setIsEmailModalOpen: Dispatch<boolean>;
};
const Header = ({ setIsEmailModalOpen }: Props) => {
  return (
    <header className="mt-32 flex min-w-full grow flex-col justify-between gap-12 md:flex-row">
      <aside className="flex h-full flex-col items-center px-8 md:mt-32 md:px-0">
        <div className="">
          <h1 className="text-6xl font-bold md:text-7xl">Join us today</h1>
          <h3 className="mt-4 max-w-xl font-medium leading-6 text-gray-400">
            Empowering businesses through tailored strategies, cutting-edge
            technologies, and unparalleled industry knowledge. We collaborate
            closely with clients to drive efficiency, foster innovation, and
            achieve remarkable results. Unlock your organization&apos;s full
            potential with our comprehensive range of consulting services.
          </h3>
          <span>
            <button
              onClick={() => {
                setIsEmailModalOpen(true);
              }}
              className="mt-4 block rounded-full bg-purple-600 px-6 py-3 font-semibold text-white md:mx-0"
            >
              Contact us
            </button>
          </span>
        </div>
      </aside>
      <aside className="relative h-[50vh] shrink-0 grow overflow-hidden md:h-auto md:w-1/2">
        <Image
          className="animate-slidein object-contain"
          alt="test"
          src={"/finance.jpg"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
        />
      </aside>
    </header>
  );
};

export default Header;
