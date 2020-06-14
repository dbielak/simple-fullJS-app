import styled from 'styled-components';
import Skeleton from '@material-ui/lab/Skeleton';

export const SkeletonSection = styled.li`
  margin: 15px 0;
`;

export const IconSkeleton = styled(Skeleton)`
  && {
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
    position: relative;
    transform: none;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const CategoryNameSkeleton = styled(Skeleton)`
  && {
    width: 100%;
    height: 15px;
    left: 10%;
    width: 80%;
    position: relative;
    transform: none;
  }
`;
