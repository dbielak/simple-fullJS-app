import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import { SearchSection, SearchButton, SearchInput, SearchBackDrop } from './styled_components';

const INIT_PLACEHOLDER = 'Czego dzisiaj szukasz?';

const Header = () => {
  const history = useHistory();
  const [placeholder, setPlaceholder] = useState(INIT_PLACEHOLDER);
  const [value, setValue] = useState('');
  const [searchMode, setSearchMode] = useState(false);

  if (history.location.pathname === '/ogloszenie/nowe') return null;

  useEffect(() => {
    if (searchMode) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [searchMode]);

  const handleInputFocus = () => {
    setPlaceholder('Zacznij pisać...');
    setSearchMode(true);
  };

  const handleInputBlur = () => {
    setPlaceholder(INIT_PLACEHOLDER);
    setSearchMode(false);
  };

  const handleInputChange = e => setValue(e.target.value);

  const handleSearchClick = () => {
    if (!value) {
      history.push('/oferty');
      return true;
    }

    return false;
  };

  const closeSearchMode = () => setSearchMode(false);

  return (
    <Hidden smDown>
      <ClickAwayListener onClickAway={closeSearchMode}>
        <>
          <SearchSection>
            <SearchInput onChange={handleInputChange} value={value} onFocus={handleInputFocus} onBlur={handleInputBlur} placeholder={placeholder} />
            <SearchButton aria-label="search" onClick={handleSearchClick}>
              <SearchIcon fontSize="small" />
            </SearchButton>
          </SearchSection>

          <SearchBackDrop open={searchMode} />
        </>
      </ClickAwayListener>
    </Hidden>
  );
};

export default Header;
