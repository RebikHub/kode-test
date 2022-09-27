import React, { ReactElement, useEffect, useState } from 'react'
import { HeaderDiv, HeaderTitle, Offline } from '../styles/styles'
import InputSearch from './InputSearch'
import TopAppBar from './TopAppBar'

export default function Header(): ReactElement {
  const [net, setNet] = useState<boolean>(true)

  useEffect(() => {
    const timer = setInterval(() => {
      if (navigator.onLine) {
        setNet(true)
      } else {
        setNet(false)
      }
    }, 2 * 1000)

    return () => clearInterval(timer);
  }, []);

  return (
    <HeaderDiv>
      {net ?
        <>
          <HeaderTitle net={net}>Поиск</HeaderTitle>
          <InputSearch/>
        </> :
        <Offline>
          <HeaderTitle net={net}>Поиск</HeaderTitle>
          <p>Не могу обновить данные. Проверь соединение с интернетом.</p>
        </Offline>}
      <TopAppBar/>
    </HeaderDiv>
  )
}
