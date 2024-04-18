/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const VanishText = () => {
  return (
    <div className=" px-4 py-24 text-center md:py-36">
      <h3 className="text-3xl font-medium text-violet-400 sm:text-4xl md:text-5xl lg:text-6xl">
        We build websites for
        <AnimatedText
          phrases={[
            "YC Startups",
            "Fortune 500",
            "Indie Hackers",
            "Marketing Teams",
            "Small Businesses",
          ]}
        />
      </h3>
    </div>
  );
};

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;
const STAGGER = 0.025;

const AnimatedText = ({ phrases }) => {
  const countRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-4">
      <AnimatePresence mode="popLayout">
        {phrases[active].split(" ").map((word, wordIndex) => {
          if (wordIndex === 0) {
            countRef.current = 0;
          }

          return (
            <motion.div key={word} className="whitespace-nowrap">
              {word.split("").map((letter, letterIndex) => {
                const content = (
                  <motion.span
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      delay: countRef.current * STAGGER,
                      ease: "easeInOut",
                      duration: 0.25,
                    }}
                    className="inline-block"
                    key={letterIndex}
                  >
                    {letter}
                  </motion.span>
                );

                countRef.current++;
                return content;
              })}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
