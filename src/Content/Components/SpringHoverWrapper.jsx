/* eslint-disable react/prop-types */
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

const SpringHoverWrapper = ({ children }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, {
    mass: 20,
    stiffness: 2000,
    damping: 50,
  });
  const ySpring = useSpring(y, {
    mass: 20,
    stiffness: 2000,
    damping: 50,
  });

  const transform = useMotionTemplate`translateX(${xSpring}px) translateY(${ySpring}px)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { height, width, left, top } = ref.current.getBoundingClientRect();

    x.set(e.clientX - (left + width / 2));
    y.set(e.clientY - (top + height / 2));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="group relative grid place-content-center rounded-full border-2 border-black transition-colors px-4 py-4 duration-700 ease-out"
    >
      {children}
    </motion.button>
  );
};

export default SpringHoverWrapper;
