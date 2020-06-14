import React, { Fragment, useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import Grow from '@material-ui/core/Grow';
import Grid from '@material-ui/core/Grid';

import { ALL_EVENTS } from '@root/queries/events';
import CategoriesSkeleton from './CategoriesSkeleton';
import iconSet from '@root/helpers/selection.json';

import { CategoriesSection, CategoryBox, CategoryIcon, SubCategories, SubLink, RightIcon } from './styled_components';

const HomeCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);

  const { loading, error, data } = useQuery(ALL_EVENTS, {
    variables: { filters: '{}', page: 1, limit: 5 }
  });

  if (categories.length === 0 && data) {
    setCategories(data.events.eventsList);
  }

  if (loading || error) {
    return (
      <CategoriesSection>
        <CategoriesSkeleton count={16} />
      </CategoriesSection>
    );
  }

  return (
    <CategoriesSection>
      {categories.map((category) => (
        <div>{category.title}</div>
      ))}
    </CategoriesSection>
  );
};

export default HomeCategories;
