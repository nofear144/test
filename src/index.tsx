import React from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import { App } from './m1-ui/App';
import { store } from './m2-bll/n2-store/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
