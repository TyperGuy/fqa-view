import { FC, useState } from 'react';
import { CustomContainer as Flex } from '../../types/Container.type';
import Dropped from '../../components/dropped/Dropped';
import data from '../../api/data.json';

const FQA: FC = () => {
  const [selected, setSelected] = useState<string>('');

  const toogle = (i: string): string => {
    if (selected === i) return '';
    setSelected(i);
    console.log(i);
    return '';
  };
  return (
    <Flex dir="column">
      {data.map((fqa) => (
        <Dropped
          question={fqa.question}
          answer={fqa.answer}
          toogle={toogle}
          element={fqa.key}
          key={fqa.key}
        />
      ))}
    </Flex>
  );
};

export default FQA;
