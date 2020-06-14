import React from 'react';
import PropTypes from 'prop-types';

import { SkeletonSection, IconSkeleton, CategoryNameSkeleton } from './styled_components';

export const CategoriesSkeleton = ({ count }) =>
  [...Array(count)].map((a, i) => (
    <SkeletonSection key={i}>
      <IconSkeleton />
      <CategoryNameSkeleton />
    </SkeletonSection>
  ));

CategoriesSkeleton.propTypes = {
  count: PropTypes.number
};

CategoriesSkeleton.defaultProps = {
  count: 1
};

export default CategoriesSkeleton;
