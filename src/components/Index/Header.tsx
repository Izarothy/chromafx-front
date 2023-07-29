import Image from "next/image";
import React, { type Dispatch } from "react";

type Props = {
  setIsEmailModalOpen: Dispatch<boolean>;
};
const Header = ({ setIsEmailModalOpen }: Props) => {
  return (
    <header className="mt-32 flex min-w-full grow flex-col justify-between gap-12 md:flex-row md:px-24 xl:px-48">
      <aside className="flex h-full flex-col items-center px-8 md:mt-32 md:px-0">
        <div className="">
          <h1 className="text-6xl font-bold md:text-7xl">
            Unleashing Potential Together
          </h1>
          <h3 className="mt-4 max-w-xl font-medium leading-6 text-gray-500">
            Elevate your business with our expertise in impactful website
            creation, grant guidance for SMEs, and optimized distribution
            channels. Enhance your online presence, secure funding, and
            streamline operations with our comprehensive consulting services.
            Let us unlock your business&apos;s full potential.
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
