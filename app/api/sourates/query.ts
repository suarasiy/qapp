import useSWR from "swr";
import { IResponseEditionTranslation, IResponseSourate } from "./interfaces";
import { fetcher } from "../utils";

/* ------------------------------ API Sourates ------------------------------ */
export const useSourates = () => {
  const { data, error, isLoading } = useSWR<IResponseSourate>(
    "https://api.alquran.cloud/v1/surah",
    fetcher,
  );

  return { sourates: data, error, isLoading };
};

/* ------------------------ API Edition Translations ------------------------ */
export const useEditionTranslations = () => {
  const { data, error, isLoading } = useSWR<IResponseEditionTranslation>(
    "https://api.alquran.cloud/v1/edition/type/translation",
    fetcher,
  );

  return { translations: data, error, isLoading };
};
