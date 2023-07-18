import Head from "next/head";
import { useState } from "react";
import Description from "~/components/Index/Description";
import EmailModal from "~/components/Index/EmailModal";
import Header from "~/components/Index/Header";
export default function Home() {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  return (
    <>
      <Head>
        <title>ChromaFX</title>
        <meta
          name="description"
          content="Empowering businesses with tailored strategies for growth, efficiency, and sustainable success. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <main
          onClick={(e) => {
            const element = e.target as HTMLElement;
            if (element.tagName.toLowerCase() === "button") return;
            setIsEmailModalOpen(false);
          }}
          className={`flex min-h-screen flex-col ${
            isEmailModalOpen ? `opacity-30` : ``
          }`}
        >
          <Header setIsEmailModalOpen={setIsEmailModalOpen} />
        </main>
        <EmailModal
          setIsEmailModalOpen={setIsEmailModalOpen}
          isEmailModalOpen={isEmailModalOpen}
        />
        <Description />
      </>
    </>
  );
}
