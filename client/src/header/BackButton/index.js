import React from 'react';
import { useHistory } from 'react-router-dom';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/IconButton';

import { BackIcon } from './styled_components';

const BackButton = () => {
  const history = useHistory();
  const {
    location: { pathname }
  } = history;

  if (pathname.search('/oferta') < 0) return null;

  const redirectBack = () => (history.action === 'PUSH' ? history.goBack() : history.push('/oferty'));

  return (
    <IconButton onClick={redirectBack} size="small" aria-label="back">
      <Zoom in mountOnEnter unmountOnExit>
        <BackIcon />
      </Zoom>
    </IconButton>
  );
};

export default BackButton;
