import React, { BaseSyntheticEvent, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { getUsersList } from '../store/sliceGetUsers';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const department: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const [checkDep, setCheckDep] = useState<string>('Все');
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (checkDep === 'Все') {
      dispatch(getUsersList('all'));
    } else {
      dispatch(getUsersList(checkDep));
    }
  }, []);

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
