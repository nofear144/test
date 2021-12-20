import React, { ReactElement } from 'react';
import './App.css';

export const App = React.memo((): null | ReactElement => (
  <div className="App">
    <div>Hello</div>
  </div>
));
