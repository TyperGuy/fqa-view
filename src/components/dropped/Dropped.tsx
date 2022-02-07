import { FC, useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { CustomContainer as Flex } from '../../types/Container.type';

const Dropped: FC = () => (
  <Flex style={{ borderTop: 'solid 1px #ddd' }} dir="column">
    <Flex style={{ color: 'rgb(17, 17, 17)' }} dir="row">
      <h3>Esse é o Titulo</h3>
      <BsPlusLg />
    </Flex>
    <hr />
    <Flex dir="flex">
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.{' '}
      </p>
    </Flex>
  </Flex>
);

export default Dropped;
