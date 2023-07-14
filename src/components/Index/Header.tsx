import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="mt-32 flex min-w-full grow flex-col justify-between gap-12 md:flex-row">
      <aside className="mx-auto flex h-full flex-col items-center pl-16 md:mt-32 md:w-1/2">
        <div className="">
          <h1 className="text-6xl font-bold md:text-7xl">Join us today</h1>
          <h3 className="mt-4 max-w-xl font-medium text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et
            explicabo aliquam veniam voluptates illum atque tempora labore
            dolore asperiores quos unde delectus facere quisquam vel aperiam
            nesciunt totam, necessitatibus optio eaque ex ipsa reprehenderit
            libero quam corrupti. Et, pariatur tempore.
          </h3>
          <span>
            <button className="mt-4 block rounded-md bg-purple-600 px-6 py-2 font-semibold text-white md:mx-0">
              Contact us
            </button>
          </span>
        </div>
      </aside>
      <aside className="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-1/2">
        <Image
          className=" object-contain"
          alt="test"
          src={"/finance.jpg"}
          fill
        />
      </aside>
    </header>
  );
};

export default Header;
