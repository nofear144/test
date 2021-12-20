import React, { FC, ReactElement } from 'react';

import './App.css';
import { HashRouter } from 'react-router-dom';

import { RoutesPage } from './c2-routes/Routes';

export const App: FC = (): null | ReactElement => (
  <div className="App">
    <HashRouter>
      <RoutesPage />
    </HashRouter>
  </div>
);
