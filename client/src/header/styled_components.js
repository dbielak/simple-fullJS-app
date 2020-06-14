import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 0.6px;

  span {
    font-size: 14px;
    font-weight: normal;
    color: #999;
  }
`;

export const StyledAddButton = styled(Button)`
  && {
    font-size: 12px;
    margin-left: 15px;
    text-transform: none;
  }
`;

export const NavbarSection = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  position: sticky;
  top: 0;
  z-index: 200;

  img {
    max-height: 20px;
    position: relative;
    top: 1px;
  }
`;

export const RightSection = styled.div`
  align-items: center;
  display: flex;
`;

export const NavbarContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const StyledDrawerContent = styled.div`
  max-width: 100%;
  width: 240px;
`;
