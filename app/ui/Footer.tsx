import React from "react";
import Block from "./Block";
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <Block className="relative items-center gap-3 text-default-700">
      <Popover placement="top">
        <PopoverTrigger>
          <Button isIconOnly className="bg-black">
            <BsGithub size={21} color="white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col items-start px-4 py-2">
          <p className="text-base font-medium">
            Navigate to GitHub repositories?
          </p>
          <Link
            href={"https://github.com/suarasiy/qapp"}
            target="_blank"
            className="text-sm text-default-500 underline"
          >
            https://github.com/suarasiy/qapp
          </Link>
        </PopoverContent>
      </Popover>
      <Divider className="relative h-6" orientation="vertical" />
      <p className="font-medium">
        Sidiq Indrajati Yusuf,{" "}
        <strong>
          <time dateTime="2024-10-25 01:01:01">&copy; 2024</time>.
        </strong>
      </p>
    </Block>
  );
};

export default Footer;
