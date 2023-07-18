import Image from "next/image";
import React from "react";
import description from "public/description.jpg";
import SourceReference from "../Global/SourceReference";
const Description = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between gap-16 bg-purple-600 px-6 py-4 lg:flex-row lg:px-24 lg:py-0 xl:px-48">
      <aside className="flex-1 text-white">
        <h2 className="mb-4 text-center text-3xl font-bold lg:text-left  xl:text-4xl">
          Why?
        </h2>
        <p className="max-w-2xl">
          In today&apos;s competitive business landscape, it&apos;s surprising
          how many businesses overlook the immense potential of optimizing their
          online presence, securing funding through grants, and streamlining
          their distribution channels. By tapping into these opportunities, you
          gain a distinct competitive edge that sets you apart from the rest. A
          staggering 44% of small businesses in the UK have already recognized
          the value of hiring a consultant to navigate these crucial aspects.{" "}
          <SourceReference
            count={1}
            link="https://clutch.co/accounting/resources/hiring-a-consultant"
            linkTitle="Hiring a Consultant: 5 Types of Consulting for Small Businesses"
          />
          Don&apos;t be left behind. Embrace our consulting services and empower
          your business to soar to new heights. We are here to fuel your
          ambition and drive your success, helping you unleash your full
          potential in the market. Get ready to revolutionize your business
          strategy and seize the opportunities that await.
        </p>
      </aside>
      <aside className="relative flex-1 lg:order-first">
        <Image
          src={description}
          alt="Description"
          className="mx-auto rounded-lg object-contain"
        />
      </aside>
    </section>
  );
};

export default Description;
