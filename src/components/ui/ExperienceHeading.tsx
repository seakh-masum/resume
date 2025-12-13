export const ExperienceHeading = ({
  totalExperience,
}: {
  totalExperience: string | null;
}) => (
  <span>
    Experience{" "}
    {totalExperience && (
      <span>
        -
        <b className="text-secondary-dark dark:text-secondary text-lg sm:text-xl align-middle fonr-sans">
          {" "}
          {totalExperience ? totalExperience : ""}
        </b>{" "}
      </span>
    )}
  </span>
);
