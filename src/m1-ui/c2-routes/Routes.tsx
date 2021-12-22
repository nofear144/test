import { FC, ReactElement } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../../m4-features/l2-homepage/HomePage';
import { ResultPage } from '../../m4-features/l3-resultPage/ResultPage';
import { NotFound } from '../../m4-features/l4-notFounPage/NotFound';

export const PATH = {
  HOME_PAGE: '/home',
  RESULT_PAGE: '/result',
  NOT_FOUND_PAGE: '/404',
};

export const RoutesPage: FC = (): null | ReactElement => (
  <Routes>
    <Route path="/" element={<Navigate to={PATH.HOME_PAGE} />} />
    <Route path={PATH.HOME_PAGE} element={<HomePage />} />
    <Route path={PATH.RESULT_PAGE} element={<ResultPage />}>
      <Route path=":paramWord" element={<ResultPage />} />
    </Route>
    <Route path={PATH.NOT_FOUND_PAGE} element={<NotFound />} />
  </Routes>
);
