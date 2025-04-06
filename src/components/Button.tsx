import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { className, children, variant, iconAfter, ...rest } = props;
  return (
    <button
      className={twMerge(
        "h-11 px-6 rounded-xl uppercase border inline-flex items-center gap-2 transition-all duration-500 relative group/button cursor-pointer",
        variant === "primary" && "bg-green-400 text-cyan-950",
        variant === "secondary" && "hover:bg-green-400 hover:text-white",
        variant === "text" &&
          "h-auto px-0 border-transparent after:transition-all after:duration-500 after:content-[''] after:h-px after:absolute after:top-full after:bg-green-300 after:w-0 hover:after:w-full",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span>{iconAfter}</span>}
    </button>
  );
};
