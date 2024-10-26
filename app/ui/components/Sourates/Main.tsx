"use client";

import React from "react";
import Layout from "../../Layout";
import Sourates from "./Sourates";
import {
  Divider,
  Pagination,
  Select,
  SelectItem,
  SelectSection,
} from "@nextui-org/react";
import { useSouratesPagination } from "@/app/lib/state/sourates/pagination";
import { useEditionTranslations } from "@/app/api/sourates/query";
import _ from "lodash";

const Main = () => {
  const { totalPage, currentPage, setPage } = useSouratesPagination(
    (state) => state,
  );

  const {
    translations: response_translations,
    error,
    isLoading,
  } = useEditionTranslations();

  const translations = _.groupBy(response_translations?.data, (tl) =>
    new Intl.DisplayNames([tl.language], { type: "language" }).of(tl.language),
  );

  return (
    <Layout className="p-0">
      {/* <div className="px-7 py-5">
        <pre>{JSON.stringify(translations, null, 2)}</pre>
      </div> */}
      <Divider />
      <div className="flex flex-col gap-4 px-7 py-5">
        <Sourates />
        <div className="pointer-events-none sticky bottom-0 flex flex-row items-center justify-between pb-5 pt-7">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-200 to-transparent"></div>
          <Pagination
            page={currentPage}
            loop
            showControls
            total={totalPage}
            onChange={setPage}
            color="success"
            className="pointer-events-auto"
          />
          <Select
            label="Translation"
            placeholder="Translations..."
            className="pointer-events-auto max-w-xs"
            size="sm"
            selectionMode="multiple"
            isLoading={isLoading}
            scrollShadowProps={{
              isEnabled: false,
            }}
          >
            {Object.keys(translations).map((x) => (
              <SelectSection
                key={x}
                title={x}
                classNames={{
                  heading:
                    "flex w-full sticky top-1 z-20 py-1.5 px-2 bg-default-100 shadow-small rounded-small",
                }}
              >
                {translations[x].map((tl) => (
                  <SelectItem key={tl.identifier}>{tl.name}</SelectItem>
                ))}
              </SelectSection>
            ))}
            {/* <SelectSection title={"test"}>
            </SelectSection> */}
            {/* {translations?.data.map((tl) => (
              <SelectItem key={tl.identifier}>{tl.name}</SelectItem>
            )) ?? []} */}
          </Select>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
