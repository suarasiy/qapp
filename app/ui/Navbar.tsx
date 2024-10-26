"use client";

import { Button, Divider, Input } from "@nextui-org/react";
import React, { useRef } from "react";
import { AiFillBook, AiFillHome } from "react-icons/ai";
import { RiSearch2Line } from "react-icons/ri";
import { useEventListener } from "usehooks-ts";
import Block from "./Block";

const Navbar = () => {
  const refInputSearch = useRef<HTMLInputElement | null>(null);

  const a11yToInputSearch = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.code === "Slash") {
      if (refInputSearch.current) {
        refInputSearch.current.focus();
      }
    }
  };

  useEventListener("keyup", a11yToInputSearch);

  return (
    <Block className="mt-10 gap-3">
      <Button
        className="shrink-0 px-5 font-medium"
        startContent={
          <AiFillHome className="pointer-events-none flex-shrink-0 text-sm text-default-400" />
        }
      >
        Home
      </Button>
      <Button
        className="shrink-0 px-5 font-medium"
        startContent={
          <AiFillBook className="pointer-events-none flex-shrink-0 text-sm text-default-400" />
        }
      >
        Surah
      </Button>
      {/* <Button
        className="shrink-0 px-5 font-medium"
        startContent={
          <AiOutlineShareAlt className="pointer-events-none flex-shrink-0 text-sm text-default-400" />
        }
      >
        Share
      </Button> */}
      <Divider orientation="vertical" className="h-[unset]" />
      <Input
        ref={refInputSearch}
        type="text"
        placeholder="Type Surah...(ctrl + /)"
        labelPlacement="outside"
        startContent={
          <RiSearch2Line className="pointer-events-none flex-shrink-0 text-lg text-default-400" />
        }
      />
    </Block>
  );
};

export default Navbar;
