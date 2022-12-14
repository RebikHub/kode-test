import React, { ReactElement, useEffect, useState } from 'react';
import { IUser } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import { ErrorPeopleDiv, ErrorPeopleImage, ErrorPeopleText, ErrorPeopleTitle, ListDiv } from '../styles/styles';
import ErrorPeople from './ErrorPeople';
import ItemPeople from './ItemPeople';

type List = Array<IUser>;

export default function ListPeople(): ReactElement {
  const { list, searchedList, searching } = useAppSelector((state) => state.sliceUsersList);
  const { error, } = useAppSelector((state) => state.sliceCacheList);
  const [listItems, setListItems] = useState<List>([]);

  useEffect(() => {
    if (list) {
      setListItems(list);
    };
  }, [list]);

  useEffect(() => {
    if (searchedList) {   
      setListItems(searchedList);
    };
  }, [searchedList]);

  if (error) {
    return <ErrorPeople/>;
  };

  if (searching) {
    return (
      <ErrorPeopleDiv>
        <ErrorPeopleImage search={searching}/>
        <ErrorPeopleTitle>Мы никого не нашли</ErrorPeopleTitle>
        <ErrorPeopleText>Попробуй скорректировать запрос</ErrorPeopleText>
      </ErrorPeopleDiv>
    );
  };

  return (
    <ListDiv>
      {list ? listItems.map((e) => <ItemPeople item={e} key={e.id + e.phone}/>) :
        [1,2,3,4,5,6].map((e) => <ItemPeople item={null} key={e} />)}
    </ListDiv>
  );
};
