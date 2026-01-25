import { motion, SVGMotionProps } from "framer-motion";

interface CircleProps extends SVGMotionProps<SVGCircleElement> {
  size?: "lg" | "sm";
  hasStroke?: boolean;
}

const Circle = ({ size = "sm", hasStroke, ...props }: CircleProps) => {
  const offset = size === "lg" ? 125 : 50;
  const radius = size === "lg" ? 110 : 40;

  return (
    <motion.circle
      cx={offset}
      cy={offset}
      r={radius}
      strokeLinecap="round"
      strokeWidth={10}
      strokeDasharray={hasStroke ? 625 : undefined}
      {...props}
    />
  );
};

export default Circle;
