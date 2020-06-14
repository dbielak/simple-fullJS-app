import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StyledMenu = styled(Button)`
  && {
    color: #606060;
    font-size: 12px;
    margin-right: 5px;
    min-width: auto;
  }
`;

export const StyledDrawerContent = styled.div`
  max-width: 100%;
  width: 240px;
`;

export const StyledListItmeText = styled.div`
  align-items: center;
  color: #444;
  display: flex;
  font-size: 12px;
  padding-left: 10px;
`;
