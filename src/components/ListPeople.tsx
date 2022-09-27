import React, { ReactElement, useState } from 'react';
import { ListDiv } from '../styles/styles';
import ErrorPeople from './ErrorPeople';
import ItemPeople from './ItemPeople';

type List = Array<number>;
const error = true

export default function ListPeople(): ReactElement {
  const [list, setList] = useState<List>([1,2,3,4,5,6]);

  if (error) {
    return <ErrorPeople/>;
  };

  return (
    <ListDiv>
      {list.map((e) => <ItemPeople item={e} key={e}/>)}
    </ListDiv>
  )
};
