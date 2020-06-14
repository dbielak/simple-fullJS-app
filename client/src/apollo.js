import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';
import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from 'apollo-boost';

import { AppContext } from '@root/context/app_context';

const ApolloWrapper = ({ children }) => {
  const appContext = useContext(AppContext);

  const httpLink = new HttpLink({ uri: 'http://localhost/api/v1' });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${appContext.token}`
      }
    });

    return forward(operation);
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>{children}</ApolloHooksProvider>
    </ApolloProvider>
  );
};

ApolloWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default ApolloWrapper;
