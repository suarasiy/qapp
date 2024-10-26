"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { twMerge } from "tailwind-merge";

interface Props {
  traces?: {
    identifier: string;
    label: string;
    navigation: string;
    isCurrent: boolean;
  }[];
  className?: string;
}

const Breadcrumb: React.FC<Props> = ({ traces, className }) => {
  return (
    <Breadcrumbs className={twMerge("relative z-10", className)}>
      <BreadcrumbItem
        startContent={<AiFillHome className="text-default-700" size={13} />}
      >
        Home
      </BreadcrumbItem>
      {traces?.map((trace) => (
        <BreadcrumbItem key={trace.identifier}>{trace.label}</BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
