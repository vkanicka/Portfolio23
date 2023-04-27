import { useState } from "react";
import Social from "../models/Social";

type Props = {
  socialsCollection?: Social[];
};

const SocialsComponent = ({ socialsCollection }: Props) => {
  const [showLabel, setShowLabel] = useState(-999);
  return (
    <address className="grid-start-10 grid-end-12 col-span-2 lg:ml-16">
      <ul className="min-w-full flex-row items-center gap-0 rounded-lg bg-neutral-800 lg:mx-6 lg:flex lg:flex-col">
        {socialsCollection?.map((social: Social, socialKey: number) => {
          return (
            <li
              className="flex w-full flex-col items-center gap-2 border-solid border-neutral-700 text-center first:rounded-t-lg last:rounded-b-lg last:border-0 hover:animate-pulse  hover:bg-neutral-700 hover:shadow-glow hover:shadow-my-blue hover:transition-opacity sm:border-r lg:border-b lg:border-r-0"
              key={socialKey}
              onMouseEnter={() => setShowLabel(socialKey)}
              onMouseLeave={() => setShowLabel(-999)}
            >
              <a
                className="relative flex w-full flex-col place-items-center py-4 text-sm not-italic text-white hover:cursor-pointer hover:text-my-lilac-400"
                href={social.url ?? social.file.url}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt={social.icon.title}
                  src={social.icon.url}
                  className="h-auto w-8 brightness-0 invert saturate-0 lg:w-7"
                />
                {/* {social.label} */}
                <div
                  className={`${
                    showLabel === socialKey
                      ? "absolute w-full -translate-y-6 translate-x-6 p-1 transition-opacity duration-200 ease-in sm:-translate-y-4 sm:translate-x-12 lg:-translate-x-20 lg:translate-y-0 lg:text-left"
                      : "hidden"
                  }`}
                >
                  <span className="animate-none text-left text-my-lilac-400">
                    {social.label}
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </address>
  );
};

export default SocialsComponent;
