import { FC, ReactElement, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Loader } from '../m1-ui/c1-common/v1-loader/Loader';
import { PATH } from '../m1-ui/c2-routes/Routes';
import { getWordsTC } from '../m2-bll/n1-reducers/word-reducer';
import { useAppSelector } from '../m2-bll/n2-store/store';

import { Word } from './l1-word/Word';
import s from './Result.module.css';

export const ResultPage: FC = (): null | ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const status = useAppSelector(state => state.words.status);

  const { paramWord } = useParams();
  useEffect(() => {
    dispatch(paramWord && getWordsTC(paramWord));
  }, [paramWord]);
  const routeToHomePage = (): void => {
    navigate(PATH.HOME_PAGE);
  };
  if (status === 'loading') {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (status === 'failed') {
    navigate(PATH.NOT_FOUND_PAGE);
  }

  return (
    <div>
      <div className={s.container} />
      <Word />
      <button type="button" onClick={routeToHomePage}>
        Go to main
      </button>
    </div>
  );
};
