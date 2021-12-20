import { FC, ReactElement, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Loader } from '../m1-ui/c1-common/v1-loader/Loader';
import { PATH } from '../m1-ui/c2-routes/Routes';
import { getWordsTC } from '../m2-bll/n1-reducers/word-reducer';
import { useAppSelector } from '../m2-bll/n2-store/store';

export const ResultPage: FC = (): null | ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const word = useAppSelector(state => state.words.words);
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
      {word.map(el => (
        // eslint-disable-next-line react/jsx-key
        <div>{el.word}</div>
      ))}
      <button type="button" onClick={routeToHomePage}>
        Go to main
      </button>
    </div>
  );
};
