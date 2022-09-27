import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUsersList } from '../store/sliceGetUsers';
import { ListDiv } from '../styles/styles';
import ErrorPeople from './ErrorPeople';
import ItemPeople from './ItemPeople';

type List = Array<number>;
const error = false

export default function ListPeople(): ReactElement {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.sliceGetUsers.list);
  const [list, setList] = useState<List>([1,2,3,4,5,6]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  if (error) {
    return <ErrorPeople/>;
  };

  return (
    <ListDiv>
      {list.map((e) => <ItemPeople item={e} key={e}/>)}
    </ListDiv>
  )
};
