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
    if (label !== "Reviews" || !setOpenReviews) {
      return;
    }
    setOpenReviews(status);
  };

  return (
    <a
      href={url}
      target="none"
      className="hover:text-bold w-64 rounded-xl border border-solid border-my-lilac-600 bg-neutral-800 px-6 py-2 text-center opacity-100 hover:bg-neutral-700"
      onMouseEnter={() => toggleReviews(true)}
      onMouseLeave={() => toggleReviews(false)}
    >
      {label}
    </a>
  );
};

export default ProjectButton;
