import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const FooterLink = styled(Button)`
  && {
    padding: 3px 10px;
    font-size: 12px;
    font-weight: normal;
    text-transform: none;
    min-width: auto;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.6px;
  color: #ccc;

  span {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const FooterSection = styled.footer`
  background-color: #f5f5f5;
  padding: 20px 0;
`;

export const FooterList = styled.ul`
  list-style: none;
  font-size: 12px;
  padding: 0;
  margin: 0 0 -5px;

  li {
    margin-bottom: 5px;

    .link-active {
      pointer-events: none;

      button {
        font-weight: bold;
      }
    }
  }
`;

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CopyrightInfo = styled.div`
  font-size: 12px;
  color: #999;
`;
