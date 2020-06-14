import styled from 'styled-components';
import IcomoonReact from 'icomoon-react';
import Button from '@material-ui/core/Button';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export const CategoryIcon = styled(IcomoonReact)`
  margin-bottom: 10px;
`;

export const SubLink = styled(Button)`
  && {
    text-transform: none;
    font-weight: normal;
    font-size: 12px;
    padding-right: 10px;
    text-align: left;
    align-items: flex-start;

    strong {
      font-weight: normal;
      margin-left: 5px;
      border-bottom: 1px solid #ccc;
    }
  }
`;

export const RightIcon = styled(ChevronRightIcon)`
  margin-right: 6px;
`;

export const SubCategories = styled.li`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  float: left;
  background-color: #f1f1f1;
  border-radius: 4px;
  padding: ${props => (props.show ? '20px' : '0')};
  height: ${props => (props.show ? '100%' : '0')};
  font-size: 12px;

  .content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 10px;
    margin-top: 10px;
    margin: 10px 0 0;
    padding: 0;
    list-style: none;
  }

  .title {
    display: inline-flex;
    align-items: center;
    border-radius: 4px;
  }

  .icon {
    font-size: 12px;
    position: relative;
    top: 4px;
  }
`;

export const CategoriesSection = styled.ul`
  position: relative;
  list-style: none;
  padding: 0;

  > li:not(.subcategories) {
    display: inline-block;
    width: 16.6666666667%;
  }
`;

export const CategoryBox = styled(Button)`
  && {
    padding: 10px 0 8px;
    margin: 10px 0;
    width: 100%;
    z-index: 1;
    background-color: ${props => props.selected && ' #f1f1f1'};

    &:before {
      content: '';
      border-radius: 3px;
      display: ${props => (props.selected ? 'block' : 'none')};
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      border: 8px solid #f1f1f1;
      bottom: -5px;
    }

    span {
      min-height: 65px;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-transform: none;
    }
  }
`;
