export const ExperienceHeading = ({
  years,
  months,
}: {
  years: number;
  months: number;
}) => (
  <span>
    Experience
    {years > 0 && (
      <span className="ml-1 text-lg sm:text-xl align-middle font-sans">
        -<b className="ml-2 text-secondary">{years}</b> years{"  "}
        <b className="text-secondary">{months}</b> months
      </span>
    )}
  </span>
);
