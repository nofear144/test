import { FC, ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../../m4-features/HomePage';
import { NotFound } from '../../m4-features/NotFound';
import { ResultPage } from '../../m4-features/ResultPage';

export const PATH = {
  HOME_PAGE: '/home',
  RESULT_PAGE: '/result',
  NOT_FOUND_PAGE: '/404',
};

export const RoutesPage: FC = (): null | ReactElement => (
  <div>
    <Routes>
      <Route path="/" element={<Navigate to={PATH.HOME_PAGE} />} />
      <Route path={PATH.HOME_PAGE} element={<HomePage />} />
      <Route path={PATH.RESULT_PAGE} element={<ResultPage />}>
        <Route path=":paramWord" element={<ResultPage />} />
      </Route>
      <Route path={PATH.NOT_FOUND_PAGE} element={<NotFound />} />
    </Routes>
  </div>
);
