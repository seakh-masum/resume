export const GradientText = ({
  text,
  fromColor,
  viaColor,
  toColor,
  isMobile,
}) => {
  return (
    <svg width="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={fromColor} />
          <stop offset="30%" stopColor={viaColor} />
          <stop offset="100%" stopColor={toColor} />
        </linearGradient>
      </defs>
      <text
        x={isMobile ? "50%" : "100%"}
        y="128"
        textAnchor={isMobile ? "middle" : "end"}
        fill="url(#gradient)"
        fontFamily="sans-serif"
        fontWeight="bold"
        className="profile-name font-dancing_script text-5xl sm:text-9xl text-transparent dark:fill-neutral-100"
      >
        {text}
      </text>
    </svg>
  );
};
