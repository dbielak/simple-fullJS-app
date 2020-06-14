import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { AppContainer, AppSection } from '@root/app/styled_components';
import { FooterSection, Logo, LogoSection } from './styled_components';

const Footer = () => (
  <FooterSection>
    <AppSection>
      <AppContainer>
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <LogoSection>
              <Logo>
                Todo<span>.pl</span>
              </Logo>
            </LogoSection>
          </Grid>
        </Grid>
      </AppContainer>
    </AppSection>
  </FooterSection>
);

export default Footer;
