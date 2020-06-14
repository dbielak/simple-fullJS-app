import React from 'react';
import EventBusyTwoToneIcon from '@material-ui/icons/EventBusyTwoTone';
import { Link } from 'react-router-dom';

import { AppSection, AppContainer } from '@root/app/styled_components';
import { NotFoundPageIcon, SeeMore } from './styled_components';

const Page404 = () => (
  <AppSection>
    <AppContainer>
      <NotFoundPageIcon>
        <EventBusyTwoToneIcon />
        <div>Ups, niestety nie znaleźliśmy strony której szukasz...</div>
        <Link to="/oferty" title="Zobacz wszystkie oferty">
          <SeeMore variant="outlined">Zobacz wszystkie oferty</SeeMore>
        </Link>
      </NotFoundPageIcon>
    </AppContainer>
  </AppSection>
);

export default Page404;
