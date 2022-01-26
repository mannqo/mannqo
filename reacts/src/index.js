import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
// import { StoreContext } from './utils/context';
import { Provider } from 'react-redux';

ReactDOM.render(
  // <StoreContext.Provider value={store}>
  //   <App />
  // </StoreContext.Provider>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);