import React from "react";
import { twMerge } from "tailwind-merge";
import Breadcrumb from "./components/Breadcrumb";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ className, children }) => {
  return (
    <div className="relative z-0 flex w-full max-w-[1020px] flex-col gap-2">
      <Breadcrumb className="ml-1" />
      <div
        className={twMerge(
          "relative flex flex-col gap-4 rounded-xl border-slate-400 bg-slate-200 px-7 py-5",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
