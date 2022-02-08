import { FC } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { CustomContainer as Flex } from '../../types/Container.type';

const Dropped: FC<{
  question: string;
  answer: string;
  toogle: Function;
  element: string;
}> = ({ question, answer, toogle, element }) => (
  <Flex style={{ borderTop: 'solid 1px #ddd' }} dir="column">
    <Flex
      style={{ color: 'rgb(17, 17, 17)' }}
      dir="row"
      onClick={() => toogle(element)}
    >
      <h3>{question}</h3>
      <BsPlusLg />
    </Flex>
    <hr />
    <Flex dir="flex">
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>{answer}</p>
    </Flex>
  </Flex>
);

export default Dropped;
