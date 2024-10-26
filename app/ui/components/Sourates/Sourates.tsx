"use client";
import { useSourates } from "@/app/api/sourates/query";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Spinner,
} from "@nextui-org/react";
import React, { useEffect } from "react";

import { motion } from "framer-motion";

import _ from "lodash";
import { useSouratesPagination } from "@/app/lib/state/sourates/pagination";

const Sourates = () => {
  const { sourates: response, error, isLoading } = useSourates();
  const { currentPage, setTotalPage } = useSouratesPagination((state) => state);

  const sourates = _.chunk(response?.data ?? [], 16);

  useEffect(() => {
    if (response) {
      setTotalPage(sourates.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response, sourates.length]);

  if (isLoading)
    return (
      <div className="flex items-center gap-4">
        <Spinner size="md" />
        <p className="font-medium text-default-600">Please wait a moment...</p>
      </div>
    );

  if (error) return <p>something went wrong.</p>;

  return (
    <motion.div
      key={currentPage - 1}
      variants={{
        show: {
          opacity: 1,
          transition: {
            duration: 0.3,
            staggerChildren: 0.023,
          },
        },
        hide: {
          opacity: 0,
        },
      }}
      initial="hide"
      animate="show"
      className="grid grid-cols-4 gap-4"
    >
      {sourates[currentPage - 1].map((sourate) => (
        <motion.div
          key={sourate.number}
          variants={{
            show: {
              y: 0,
              filter: "blur(0)",
              scale: 1,
              opacity: 1,
              transition: {
                ease: [0.24, 1.21, 0.21, 1.15],
                duration: 0.345,
              },
            },
            hide: {
              y: -10,
              filter: "blur(1px)",
              scale: 0.95,
              opacity: 0,
            },
          }}
          className="group"
        >
          <Button
            className="m-0 h-full w-full overflow-hidden p-0 hover:bg-slate-300/30 group-odd:bg-slate-300/20 group-odd:hover:bg-slate-300/40 data-[hover]:opacity-100"
            variant="bordered"
          >
            <Card className="w-full bg-transparent px-2" radius="none">
              <CardHeader className="flex flex-col">
                <div className="flex w-full items-start gap-3">
                  <strong>{sourate.number}</strong>
                  <div className="flex w-full flex-col items-end">
                    <h2 className="text-right text-lg text-default-900">
                      {sourate.name}
                    </h2>
                    <p className="text-sm text-default-600">
                      {sourate.englishName}
                    </p>
                  </div>
                </div>
                <small className="w-full text-right text-default-500">
                  ({sourate.englishNameTranslation})
                </small>
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-row gap-1">
                <Chip size="sm" radius="sm" variant="flat">
                  {sourate.numberOfAyahs} ayah
                </Chip>
                <Chip size="sm" radius="sm" variant="dot" color="success">
                  {sourate.revelationType}
                </Chip>
              </CardBody>
            </Card>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Sourates;
