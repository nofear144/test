import { FC, ReactElement } from 'react';

import s from './Loader.module.css';

export const Loader: FC = (): null | ReactElement => (
  <div>
    <div className={s.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);
