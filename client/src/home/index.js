import React from 'react';
import Grid from '@material-ui/core/Grid';

import { AppSection, AppContainer } from '@root/app/styled_components';
import HomeCategories from './HomeCategories';

import { HomeSection, Jumbotron } from './styled_components';

const Home = () => {
  return (
    <AppSection>
      <AppContainer>
        <HomeSection>
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12}>
              <Jumbotron>
                <strong>Ogłoszenia sellbox</strong>Prawdopodobnie najprostszy serwis ogłoszeń w Polsce!
              </Jumbotron>
            </Grid>
          </Grid>

          <Grid container justify="center" spacing={3}>
            <Grid item sm={10}>
              <HomeCategories />
            </Grid>
          </Grid>
        </HomeSection>
      </AppContainer>
    </AppSection>
  );
};

export default Home;
