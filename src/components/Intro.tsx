import { useTextAnimation } from "@/hooks/use-text-animation";
import { useInView } from "motion/react";
import { useEffect, useRef } from "react";

export const Intro = () => {
  const sectionRef = useRef(null);
  const { scope, entranceAnimation } = useTextAnimation();
  const inView = useInView(sectionRef, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  return (
    <section
      className="section mt-12 md:mt-16 lg:mt-20"
      id="intro"
      ref={sectionRef}
    >
      <div className="box">
        <h2
          className="font-light text-4xl md:text-7xl lg:text-8xl lg:w-[80%] leading-20 md:leading-30"
          ref={scope}
        >
          I'm Junkai, a programmer with a primary focus on TypeScript and Rust.
        </h2>
      </div>
    </section>
  );
};
