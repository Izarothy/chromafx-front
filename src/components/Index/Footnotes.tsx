import React from "react";
import { type Source } from "~/utils/types";

type Props = {
  footnoteList: Source[];
};

const Footnotes = ({ footnoteList }: Props) => {
  return (
    <section className="my-8 md:px-24 xl:px-48">
      <h2 className="mb-3 text-xl font-semibold">Footnotes</h2>
      <ol className="list-decimal px-4">
        {footnoteList.map(({ count, link, description }) => {
          return (
            <li key={count} id={String(count)}>
              <a href={link} target="_blank" className="text-blue-500">
                {description}
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
};

export default Footnotes;
