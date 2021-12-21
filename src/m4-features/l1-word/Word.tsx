import { FC, ReactElement, useRef } from 'react';

import { useAppSelector } from '../../m2-bll/n2-store/store';

import s from './Word.module.css';

export const Word: FC = (): null | ReactElement => {
  const word = useAppSelector(state => state.words.words);
  const audioRef = useRef<HTMLAudioElement>(null);
  /* const play = (): Promise<void> | null =>
   audioRef && audioRef.current && audioRef.current.play(); */
  return (
    <div>
      {word.map((el, i) => {
        const id = `${el}${i}`;
        return (
          <div key={id}>
            <div className={s.mainContainer}>
              <div className={s.container}>
                <div>
                  <strong>word</strong>: {el.word}
                </div>
                <div>
                  <strong>phonetic</strong>: {el.phonetic}
                </div>
                <div>
                  {el.phonetics.map((ph, j) => {
                    const idPhonetics = `${ph}${j}`;
                    return (
                      <div key={idPhonetics}>
                        <div>
                          <strong>text</strong>: {ph.text}
                        </div>
                        {ph.audio && (
                          <div>
                            <strong>audio</strong>:
                            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                            <audio ref={audioRef} controls>
                              <source src={ph.audio} type="audio/mp3" />
                            </audio>
                            {/* <img role="presentation" onClick={play} src={playImg} alt="svg play" /> */}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                {el.origin && (
                  <div>
                    <strong>origin</strong>: {el.origin}
                  </div>
                )}
                <div>
                  {el.meanings.map((ms, k) => {
                    const idMeanings = `${ms}${k}`;
                    return (
                      <div key={idMeanings}>
                        <div>
                          <strong>partOfSpeech</strong>: {ms.partOfSpeech}
                        </div>
                        <div>
                          {ms.definitions.map((def, l) => {
                            const idDefinitions = `${def}${l}`;
                            return (
                              <div key={idDefinitions}>
                                <div>
                                  <strong>definition</strong>: {def.definition}
                                </div>
                                {def.example && (
                                  <div>
                                    <strong>example</strong>: {def.example}
                                  </div>
                                )}
                                {def.synonyms.length !== 0 && (
                                  <div>
                                    <strong>synonyms</strong>:
                                    {def.synonyms.map((syn, m) => {
                                      const idSynonyms = `${syn}${m}`;
                                      return (
                                        <div key={idSynonyms}>
                                          <span>{syn}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                                {def.antonyms.length !== 0 && (
                                  <div>
                                    <strong>antonyms</strong>:
                                    {def.antonyms.map((ant, n) => {
                                      const idAntonyms = `${ant}${n}`;
                                      return (
                                        <div key={idAntonyms}>
                                          <div>{ant}</div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
