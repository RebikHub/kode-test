import React, { BaseSyntheticEvent, ReactElement, useState } from 'react';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const department: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const [checkDep, setCheckDep] = useState<string>('Все');
  return (
    <TopBar>
      <NavBar>
        {department.map((e: string, i: number) => (
        <ItemBar 
          onClick={(ev: BaseSyntheticEvent) => setCheckDep(ev.target.firstChild.textContent)}
          click={checkDep === e}
          key={i}>{e}</ItemBar>
          ))}
      </NavBar>
    </TopBar>
  )
};
