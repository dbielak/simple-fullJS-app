import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { scroller } from 'react-scroll';

import { FetchingContext } from '@root/context/FetchingContext';
import { BottomWrapper, StyledPagination, StyledTextField } from './styled_components';

const Pagination = ({ pages, page, disabled }) => {
  const history = useHistory();
  const [selectedPage, setSelectedPage] = useState('');
  const { setIsFetching } = useContext(FetchingContext);

  useEffect(() => {
    if (selectedPage > 1) changePage(selectedPage);
  }, [selectedPage]);

  useEffect(() => {
    const searchParams = new URLSearchParams(history.location.search);
    const newPage = parseInt(searchParams.get('page'), 10);
    if (newPage > 1) {
      setSelectedPage(newPage);
    } else {
      setSelectedPage(1);
    }
  }, [history.location]);

  const changePage = (newPage) => {
    const { search } = history.location;
    const searchParams = new URLSearchParams(search);
    searchParams.set('page', newPage);
    setIsFetching(true);
    scroller.scrollTo('TopList', {
      duration: 0,
      delay: 0,
      offset: -110
    });

    history.push({
      search: searchParams.toString()
    });
  };

  const handleSelectPage = (e) => {
    let newPage = e.target.value;

    if (newPage < page) newPage = page;
    if (newPage > pages) newPage = pages;

    setSelectedPage(newPage);
  };

  const handleChange = (_, newPage) => changePage(newPage);

  return (
    <BottomWrapper>
      <StyledPagination count={pages} page={page} onChange={handleChange} disabled={disabled} />

      {pages > 1 && (
        <StyledTextField>
          Str. <input type="number" value={selectedPage} onChange={handleSelectPage} /> z {pages}
        </StyledTextField>
      )}
    </BottomWrapper>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  disabled: PropTypes.bool
};

export default Pagination;
