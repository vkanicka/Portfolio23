import Bio from "../models/Bio";

type Props = {
  bio?: Bio;
};

const BioComponent = ({ bio }: Props) => {
  if (!bio) {
    return <span>Loading...</span>;
  }
  const { name, title, headshot } = bio;

  return (
    <section className="col-span-6 flex flex-row items-center gap-x-12">
      <img
        className="h-40 w-40 rounded-full"
        src={headshot?.url}
        alt="headshot"
      />
      <div className="flex flex-col gap-y-6">
        <h1 className="">{name}</h1>
        <h2>{title}</h2>
      </div>
    </section>
  );
};
export default BioComponent;
