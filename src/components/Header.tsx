import React, { ReactElement } from 'react'
import { HeaderDiv, HeaderTitle } from '../styles/styles'
import InputSearch from './InputSearch'
import TopAppBar from './TopAppBar'

export default function Header(): ReactElement {
  return (
    <HeaderDiv>
      <HeaderTitle>Поиск</HeaderTitle>
      <InputSearch/>
      <TopAppBar/>
    </HeaderDiv>
  )
}
