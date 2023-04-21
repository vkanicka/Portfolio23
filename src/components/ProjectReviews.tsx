type Props = {
  reviews: string[];
  projectKey: number;
};

const ProjectReviews = ({ reviews, projectKey }: Props) => {
  const alignReviews =
    (projectKey % 2 === 0 ? "left-[400px] " : "right-[400px] ") +
    (projectKey > 1 ? "bottom-[100px] " : "");

  const colors = [
    "text-my-blue",
    "text-my-lime-300",
    "text-neutral-100",
    "text-neutral-200",
    "text-neutral-100",
    "text-my-lilac-400",
    "text-my-lilac-600",
    "text-fuchsia-200",
    "text-fuchsia-100",
    "text-emerald-200",
    "text-emerald-100",
    "text-teal-200",
    "text-teal-300",
    "text-cyan-200",
    "text-cyan-100",
    "text-white",
  ];

  return (
    <section
      className={
        alignReviews +
        "absolute h-auto w-auto rounded-xl border border-solid border-lime-300 bg-black p-6"
      }
    >
      {reviews.map((review, reviewKey) => {
        return (
          <p
            className={
              "whitespace-nowrap text-lg " +
              colors[Math.floor(Math.random() * colors.length)]
            }
            key={reviewKey}
          >
            {review}
          </p>
        );
      })}
    </section>
  );
};
export default ProjectReviews;
