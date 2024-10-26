/* -------------------------------------------------------------------------- */
/*                          Base Response of Sourate                          */
/* -------------------------------------------------------------------------- */
// https://api.alquran.cloud/v1/surah

import { IGenericCodeStatus } from "../IGeneric";

export interface ISourate {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

export interface IResponseSourate extends IGenericCodeStatus {
  data: ISourate[];
}

// Translations
export interface IEditionTranslation {
  identifier: string;
  language: string;
  name: string;
  englishName: string;
  format: string;
  type: string;
  direction: string;
}

export interface IResponseEditionTranslation extends IGenericCodeStatus {
  data: IEditionTranslation[];
}
