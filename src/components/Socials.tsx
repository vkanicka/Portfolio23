import Social from "../models/Social";

type Props = {
  socialsCollection?: Social[];
};

const SocialsComponent = ({ socialsCollection }: Props) => {
  return (
    <address className="grid-start-10 grid-end-12 col-span-2 lg:ml-16">
      <ul className="flex flex-col items-center gap-0 rounded-lg bg-neutral-900 sm:flex-row lg:flex-col">
        {socialsCollection?.map((social: Social, socialKey: number) => {
          return (
            <li
              className="w-full border-solid border-neutral-700 px-2 py-5 text-center first:rounded-t-lg last:rounded-b-lg last:border-0 hover:bg-neutral-800 sm:border-r lg:border-b lg:border-r-0 lg:border-neutral-800"
              key={socialKey}
            >
              <a
                className="text-lg not-italic text-white hover:text-my-lilac-400"
                href={social.url}
              >
                {social.label}
              </a>
            </li>
          );
        })}
      </ul>
    </address>
  );
};

export default SocialsComponent;
