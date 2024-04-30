import { LOCALES } from "../i189/locales";

export const FILTER_TERM = "song";
export const BASE_URL = "https://itunes.apple.com/search";
export const mockResponse = [
  { kind: "Movie" },
  { kind: "song" },
  { kind: "movie" },
];
export const LANGUAGES = [
  { key: LOCALES.ENGLISH, label: "English" },
  { key: LOCALES.FRENCH, label: "French" },
  { key: LOCALES.GERMAN, label: "German" },
];
