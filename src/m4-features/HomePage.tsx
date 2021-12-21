import { ChangeEvent, FC, ReactElement, useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setErrorAC } from '../m2-bll/n1-reducers/word-reducer';
import { useAppSelector } from '../m2-bll/n2-store/store';

import s from './Homepage.module.css';

export const HomePage: FC = (): null | ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorFromServer = useAppSelector(state => state.words.error);

  const [word, setWord] = useState('');

  const changeWordValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setWord(e.currentTarget.value);
    if (errorFromServer) {
      dispatch(setErrorAC(''));
    }
  };

  const routeToResult = (): void => {
    if (word.length === 0) {
      return;
    }
    navigate(`/result/${word}`);
  };

  return (
    <div>
      <div className={s.container}>
        <input onChange={changeWordValue} value={word} />
        <button type="button" onClick={routeToResult}>
          Request
        </button>
      </div>
    </div>
  );
};
