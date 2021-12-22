import { FC, ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import { PATH } from '../../m1-ui/c2-routes/Routes';

import s from './NotFound.module.css';

export const NotFound: FC = (): null | ReactElement => {
  const navigate = useNavigate();
  const routeToHomePage = (): void => {
    navigate(PATH.HOME_PAGE);
  };

  return (
    <div className={s.container}>
      <div className={s.wordNotFound}>Word Not Found</div>
      <div className={s.positBtn}>
        <button className={s.back} type="button" onClick={routeToHomePage}>
          Back to main
        </button>
      </div>
    </div>
  );
};
