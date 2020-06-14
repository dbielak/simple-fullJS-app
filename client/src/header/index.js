import React from 'react';
import { Add } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import SideMenu from './SideMenu';
import BackButton from './BackButton';

import { AppContainer, AppSection } from '@root/app/styled_components';
import { NavbarSection, RightSection, NavbarContent, StyledAddButton, Logo } from './styled_components';

const Header = () => {
  const location = useLocation();
  const isAddItemPage = location.pathname === '/nowa-oferta';

  return (
    <NavbarSection>
      <AppSection>
        <AppContainer>
          <NavbarContent>
            <div>
              <SideMenu />

              <Link to="/">
                <Logo>
                  sellbox<span>.pl</span>
                </Logo>
              </Link>
            </div>

            {!isAddItemPage && (
              <RightSection>
                <Link to="/nowa-oferta">
                  <StyledAddButton variant="outlined" size="small" color="primary" aria-label="add">
                    <Add />
                    Add todo
                  </StyledAddButton>
                </Link>
              </RightSection>
            )}
          </NavbarContent>
        </AppContainer>
      </AppSection>
    </NavbarSection>
  );
};

export default Header;
