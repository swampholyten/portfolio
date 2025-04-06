import { Button } from "@/components/Button";
import { useTextAnimation } from "@/hooks/use-text-animation";
import { navLinks } from "@/lib/nav-links";
import { useInView } from "motion/react";
import { useEffect, MouseEvent } from "react";

export const Footer = () => {
  const { scope, entranceAnimation } = useTextAnimation();
  const inView = useInView(scope);

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const url = new URL(e.currentTarget.href);
    const hash = url.hash;

    const target = document.querySelector(hash);

    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });

    console.log(hash);
  };

  return (
    <footer className="bg-foreground/10" id="contact">
      <div className="box">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-600 animate-pulse"></div>
            <div className="uppercase">One stop available for next month</div>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2
                className="text-4xl mt-8 md:text-7xl lg:text-8xl font-extralight"
                ref={scope}
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <a href={"mailto:ji.junkai@outlook.com"}>
                <Button
                  variant="secondary"
                  className="mt-8"
                  iconAfter={
                    <div className="size-6 overflow-hidden">
                      <div className="flex h-6 w-12 group-hover/button:-translate-x-1/2 transition-transform duration-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  ji.junkai@outlook.com
                </Button>
              </a>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navLinks.map(({ href, label }) => (
                  <a href={href} key={label} onClick={handleClickMobileNavItem}>
                    <Button variant="text" className="text-lg">
                      {label}
                    </Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <p className="text-white/50 text-sm border-t py-4 md:py-6 lg:py-10">
          Copyright &copy; Junkai Ji &bull; All rights reserved
        </p>
      </div>
    </footer>
  );
};
