import styled from 'styled-components';
import Pagination from '@material-ui/lab/Pagination';

export const BottomWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StyledPagination = styled(Pagination)``;

export const StyledTextField = styled.div`
  align-items: center;
  color: #999;
  display: flex;
  font-size: 12px;
  margin-right: 20px 0;

  input {
    border-radius: 4px;
    border: 1px solid #f1f1f1;
    height: 25px;
    margin: 0 5px;
    padding: 2px;
    text-align: center;
    width: 35px;

    &:focus,
    &:active {
      box-shadow: none;
      outline: none;
    }
  }
`;
