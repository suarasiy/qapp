import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Block: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={twMerge(
        "flex w-fit rounded-2xl bg-slate-200 px-2 py-[6px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Block;
