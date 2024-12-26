import React from "react";

interface StarBorderProps {
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

const StarBorder: React.FC<StarBorderProps> = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "6s",
  children,
  ...rest
}) => {
  return (
    <Component
      className={`relative inline-block py-[1px] overflow-hidden rounded-[10px] ${className}`}
      {...rest}
    >
      <div
        className="absolute w-[300%] h-[50%] opacity-70 bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div
        className="absolute w-[300%] h-[50%] opacity-70 top-[-10px] left-[-250%] dark: rounded-full animate-star-movement-top z-0"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>
      <div className="relative z-1 bg-gradient-to-b from-neutral-600   to-gray-200  dark:bg-gradient-to-b dark:from-black dark:to-gray-900 border border-gray-800 dark:text-white   text-center text-[16px] py-[16px] px-[26px] rounded-[10px]">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
