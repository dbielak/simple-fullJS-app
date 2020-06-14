import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from '@root/header';
import Footer from '@root/footer';

import { AppWrapperSection, AppWrapperChildren } from './styled_components';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#ff4747' },
    secondary: { main: '#2196f3' }
  }
});

const AppWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapperSection>
        <Header />
        <AppWrapperChildren>{children}</AppWrapperChildren>
        <Footer />
      </AppWrapperSection>
    </ThemeProvider>
  );
};

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppWrapper;
