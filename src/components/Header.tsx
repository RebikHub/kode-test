import React, { ReactElement, useEffect, useState } from 'react';
import { useAppSelector } from '../store/hooks';
import { HeaderDiv, HeaderTitle, Notice } from '../styles/styles';
import InputSearch from './InputSearch';
import TopAppBar from './TopAppBar';

export default function Header(): ReactElement {
  const [net, setNet] = useState<boolean>(true);
  const { loading } = useAppSelector((state) => state.sliceGetUsers);

  useEffect(() => {
    const timer = setInterval(() => {
      if (navigator.onLine) {
        setNet(true);
      } else {
        setNet(false);
      };
    }, 2 * 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeaderDiv>
      {net ? loading ?
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
