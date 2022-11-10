import React, { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUsersList } from '../store/thunk';
import { HeaderDiv, HeaderTitle, Notice } from '../styles/styles';
import InputSearch from './InputSearch';
import TopAppBar from './TopAppBar';

export default function Header(): ReactElement {
  const [net, setNet] = useState<boolean>(true);
  const [afterLoad, setAfterLoad] = useState<boolean>(false);
  const { loading } = useAppSelector((state) => state.sliceCacheList);
  const { department } = useAppSelector((state) => state.sliceChoiceDep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (!navigator.onLine) {
        setNet(false);
        setAfterLoad(true);
      } else {
        setNet(true);
      };
    }, 2 * 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (net && afterLoad) {
      dispatch(getUsersList(department.name));
    };
  }, [afterLoad, department.name, dispatch, net]);

  useEffect(() => {
    if (afterLoad && !loading) {
      setAfterLoad(false);
    }
  }, [afterLoad, loading]);

  return (
    <HeaderDiv>
      {net ? loading && afterLoad ?
        <Notice load={loading}>
          <HeaderTitle net={!net}>Поиск</HeaderTitle>
          <p>Секундочку, гружусь...</p>
        </Notice> :
        <>
          <HeaderTitle net={net}>Поиск</HeaderTitle>
          <InputSearch/>
        </> :
        <Notice load={loading}>
          <HeaderTitle net={net}>Поиск</HeaderTitle>
          <p>Не могу обновить данные. Проверь соединение с интернетом.</p>
        </Notice>}
      <TopAppBar/>
    </HeaderDiv>
  );
};
