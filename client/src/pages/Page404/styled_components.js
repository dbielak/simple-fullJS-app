import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const SeeMore = styled(Button)`
  && {
    text-transform: none;
  }
`;

export const NotFoundPageIcon = styled.div`
  && {
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    font-size: 18px;
    text-align: center;

    > div {
      margin-bottom: 40px;
    }

    svg {
      color: #ccc;
      font-size: 120px;
    }
  }
`;
