import About from "../models/About";

type Props = {
  about?: About;
};

const AboutComponent = ({ about }: Props) => {
  if (!about) {
    return <span>Loading...</span>;
  }
  const lists = about.listsCollection.items;
  const externalLink = about.externalLink;

  return (
    <section className="col-span-8 flex flex-col gap-3 sm:gap-1">
      {lists.map((list, listIndex) => {
        const { label, values, wordDivider } = list;
        return (
          <ul className="flex-wrap" key={listIndex}>
            <h4 className="whitespace-no-wrap">{label}: </h4>
            {values.map((value, valueIndex) => {
              return (
                <li key={valueIndex}>
                  {value}
                  {valueIndex < values.length - 1 && (
                    <span className="font-bold text-neutral-600">
                      {(wordDivider === "|" ? " " : "") + wordDivider}
                    </span>
                  )}
                </li>
              );
            })}
            <hr className="mt-3 w-full border-neutral-800 sm:mt-1 lg:mt-0 lg:hidden" />
          </ul>
        );
      })}
      <h4>
        {externalLink.label}:{" "}
        <a target="_blank" href={externalLink.url} rel="noreferrer">
          {externalLink.urlShorthand}
        </a>
      </h4>
    </section>
  );
};
export default AboutComponent;
