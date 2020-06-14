import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Backdrop from '@material-ui/core/Backdrop';

export const SearchButton = styled(Button)`
  && {
    min-width: auto;
    padding: 5px 8px;
  }
`;

export const SearchBackDrop = styled(Backdrop)`
  && {
    z-index: 5;
  }
`;

export const SearchInput = styled(InputBase)`
  input {
    font-size: 12px;
    color: #333;
    line-height: 1;
    width: 230px;
    height: 30px;
    max-width: 100%;
    box-sizing: border-box;

    ::placeholder {
      font-size: 12px;
      color: #666;
    }
  }
`;

export const SearchSection = styled.div`
  display: flex;
  border-radius: 4px;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  padding: 0 0 0 10px;
  align-items: center;
  z-index: 6;
`;
