import React from 'react';
import ReactDOM from 'react-dom';
import 'cross-fetch/polyfill';

import AppContextProvider from '@root/context/app_context';
import ApolloWrapper from '@root/apollo';
import App from '@root/app';

ReactDOM.render(
  <AppContextProvider>
    <ApolloWrapper>
      <App />
    </ApolloWrapper>
  </AppContextProvider>,

  document.querySelector('#root')
);
