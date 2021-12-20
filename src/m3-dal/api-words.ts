import axios, { AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
});

export const wordsAPI = {
  getWord(word: string) {
    return instance.get<any, AxiosResponse<WordResponseType[]>>(word);
  },
};

// Types

export type WordResponseType = {
  word: string;
  phonetic: string;
  phonetics: PhoneticType;
  origin?: string;
  meanings: MeaningType[];
};
type PhoneticType = [{ text: string; audio: string }, { text: string }];
type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
};
type DefinitionType = {
  definition: string;
  example: string;
  synonyms: [];
  antonyms: [];
};
