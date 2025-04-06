import { stagger, useAnimate } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

export const useTextAnimation = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    new SplitType(scope.current, {
      types: "lines,words",
      tagName: "span",
    });
  }, [scope]);

  const entranceAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      { opacity: 1 },
      {
        duration: 0.4,
        delay: stagger(0.15, {
          ease: "easeInOut",
        }),
      }
    );
  };

  const exitAnimation = () => {
    return animate(
      scope.current.querySelectorAll(".word"),
      { opacity: 0 },
      {
        duration: 0.3,
        delay: stagger(-0.25, {
          startDelay: scope.current.querySelectorAll(".word").length * 0.025,
        }),
      }
    );
  };

  return {
    scope,
    entranceAnimation,
    exitAnimation,
  };
};
