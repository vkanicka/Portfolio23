type Props = {
  label: string;
  url?: string;
  reviews?: string[];
  setOpenReviews?: Function;
};

const ProjectButton = ({
  label,
  url = "",
  reviews = [],
  setOpenReviews,
}: Props) => {
  const toggleReviews = (status: boolean) => {
    if (isReviews || !setOpenReviews) {
      return;
    }
    setOpenReviews(status);
  };
  const isReviews = label !== "Reviews";

  return (
    <a
      href={url}
      target="none"
      className={`${
        label === "Reviews" ? "hidden lg:block" : ""
      } hover:text-bold w-2/3 rounded-xl border border-solid border-my-lilac-600 bg-black px-6 py-2 text-center opacity-100 hover:bg-neutral-700 lg:w-64 lg:bg-neutral-800`}
      onMouseEnter={() => toggleReviews(true)}
      onMouseLeave={() => toggleReviews(false)}
    >
      {label}
    </a>
  );
};

export default ProjectButton;
