import React from 'react';

import { LoadingDots } from './styled_components';

const LoadingFallback = () => (
  <LoadingDots>
    <div className="bounce1" />
    <div className="bounce2" />
    <div className="bounce3" />
  </LoadingDots>
);

export default LoadingFallback;
