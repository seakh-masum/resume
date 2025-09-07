import { SVGProps } from "react";

interface CircleProps extends SVGProps<SVGCircleElement> {
  className?: string;
  size?: "lg" | "sm";
  hasStroke?: boolean;
}

const Circle = (props: CircleProps) => {
  const { className, size = "sm", hasStroke, ...otherProps } = props;
  const offset = size === "lg" ? 125 : 50;
  const radius = size === "lg" ? 110 : 40;
  return (
    <circle
      cx={offset}
      cy={offset}
      r={radius}
      strokeLinecap="round"
      strokeWidth={10}
      className={className}
      width="100%"
      height="100%"
      {...otherProps}
      strokeDasharray={hasStroke ? "625px" : undefined}
    ></circle>
  );
};

export default Circle;
