import React, { ReactElement, useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import { ListDiv } from '../styles/styles';
import ErrorPeople from './ErrorPeople';
import ItemPeople from './ItemPeople';

type List = Array<IUser>;

export default function ListPeople(): ReactElement {
  const {list, error} = useAppSelector((state) => state.sliceGetUsers);
  const [listItems, setListItems] = useState<List>([]);

  useEffect(() => {
    if (list) {
      setListItems(list);
    };
  }, [list]);

  if (error) {
    return <ErrorPeople/>;
  };

  return (
    <ListDiv>
      {list ? listItems.map((e) => <ItemPeople item={e} key={e.id + e.phone}/>) :
        [1,2,3,4,5,6].map((e) => <ItemPeople item={null} key={e} />)}
    </ListDiv>
  )
};
