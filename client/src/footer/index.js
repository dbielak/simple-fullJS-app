import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useLocation } from 'react-router-dom';
import classnames from 'classnames';

import { AppContainer, AppSection } from '@root/app/styled_components';
import { FooterList, FooterSection, Logo, LogoSection, CopyrightInfo, FooterLink } from './styled_components';
import footerMenuItems from './footer_menu_items';

const Footer = () => {
  const location = useLocation();
  const isLinkActive = (link) => location.pathname === link;

  return (
    <FooterSection>
      <AppSection>
        <AppContainer>
          <Grid container spacing={3}>
            <Grid item sm={6}>
              <LogoSection>
                <Logo>
                  sellbox<span>.pl</span>
                </Logo>
                <CopyrightInfo>@ copyright sellbox.pl</CopyrightInfo>
              </LogoSection>
            </Grid>

            {footerMenuItems.map(({ key, menuItems }) => (
              <Grid key={key} item sm={3}>
                <FooterList>
                  {menuItems.map(({ link, seo, title }) => (
                    <li key={link}>
                      <Link to={link} title={seo} className={classnames({ 'link-active': isLinkActive(link) })}>
                        <FooterLink>{title}</FooterLink>
                      </Link>
                    </li>
                  ))}
                </FooterList>
              </Grid>
            ))}
          </Grid>
        </AppContainer>
      </AppSection>
    </FooterSection>
  );
};

export default Footer;
