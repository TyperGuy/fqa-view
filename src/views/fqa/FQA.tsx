import { FC } from 'react';
import { CustomContainer as Flex } from '../../types/Container.type';
import Dropped from '../../components/dropped/Dropped';

const FQA: FC = () => (
  <Flex dir="column">
    <Dropped />
    <Dropped />
    <Dropped />
  </Flex>
);

export default FQA;
