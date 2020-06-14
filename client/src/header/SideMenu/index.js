import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from '@material-ui/icons';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { MENU_ITEMS } from './side_menu_items';
import { StyledMenu, StyledDrawerContent, StyledListItmeText } from './styled_components';

const SideMenu = () => {
  const [drawer, setDrawer] = useState(false);
  const history = useHistory();
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  const handleClick = (link) => () => {
    history.push(link);
    toggleDrawer();
  };

  return (
    <>
      <StyledMenu size="small" onClick={toggleDrawer}>
        <Menu />
      </StyledMenu>

      <Drawer open={drawer} onClose={toggleDrawer}>
        <StyledDrawerContent>
          <List>
            {MENU_ITEMS.map(({ name, link, icon: Icon }) => (
              <ListItem button key={link} onClick={handleClick(link)}>
                <ListItemIcon>
                  <Icon fontSize="small" color="disabled" />
                  <StyledListItmeText>{name}</StyledListItmeText>
                </ListItemIcon>
              </ListItem>
            ))}
          </List>
        </StyledDrawerContent>
      </Drawer>
    </>
  );
};

export default SideMenu;
