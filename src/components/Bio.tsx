import Bio from "../models/Bio";

type Props = {
  bio?: Bio;
};

const BioComponent = ({ bio }: Props) => {
  // if (!bio) {
  //   return <span>Loading...</span>;
  // }
  // const { name, title, headshot } = bio;

  const name = bio?.name;
  const title = bio?.title;
  const headshot = bio?.headshot;

  return (
    <section className="flex flex-row items-center gap-x-6 lg:col-span-6 lg:gap-x-12">
      {headshot?.url && (
        <img
          className="h-24 w-24 rounded-full text-center lg:h-40 lg:w-40"
          src={headshot?.url}
          alt="headshot"
        />
      )}
      <div className="flex flex-col gap-y-6">
        <h1 className="drop-shadow-glow">{name}</h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};
export default BioComponent;
