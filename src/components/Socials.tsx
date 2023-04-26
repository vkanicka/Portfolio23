import Social from "../models/Social";

type Props = {
  socialsCollection?: Social[];
};

const SocialsComponent = ({ socialsCollection }: Props) => {
  return (
    <address className="grid-start-10 grid-end-12 col-span-2 lg:ml-16">
      <ul className="flex-row items-center gap-0 rounded-lg bg-neutral-800 lg:mx-6 lg:flex lg:flex-col">
        {socialsCollection?.map((social: Social, socialKey: number) => {
          return (
            <li
              className="flex w-full flex-col items-center gap-2  border-solid border-neutral-700 py-4 text-center first:rounded-t-lg last:rounded-b-lg last:border-0 hover:bg-neutral-700 sm:border-r lg:border-b lg:border-r-0"
              key={socialKey}
            >
              <img
                alt={social.icon.title}
                src={social.icon.url}
                className="h-auto w-8 brightness-0 invert saturate-0 lg:w-7"
              />
              {/* <a
                className="text-sm not-italic text-white hover:text-my-lilac-400"
                href={social.url}
              >
                {social.label}
              </a> */}
            </li>
          );
        })}
      </ul>
    </address>
  );
};

export default SocialsComponent;
