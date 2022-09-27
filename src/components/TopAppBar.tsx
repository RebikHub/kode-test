import React, { BaseSyntheticEvent, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { swapDepartment } from '../store/sliceChoiceDep';
import { getUsersList } from '../store/sliceGetUsers';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const depArray: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const [checkDep, setCheckDep] = useState<string>('Все');
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (checkDep) {
      case 'Все':
        dispatch(getUsersList('all'));
        dispatch(swapDepartment('all'))
        break;
      case 'Designers':
        dispatch(getUsersList('design'));
        dispatch(swapDepartment('design'))
        break;
      case 'Analysts':
        dispatch(getUsersList('analytics'));
        dispatch(swapDepartment('analytics'))
        break;
      case 'Managers':
        dispatch(getUsersList('management'));
        dispatch(swapDepartment('management'))
        break;
      case 'iOS':
        dispatch(getUsersList('ios'));
        dispatch(swapDepartment('ios'))
        break;
      case 'Android':
        dispatch(getUsersList('android'));
        dispatch(swapDepartment('android'))
        break;
      default:
        dispatch(getUsersList('all'));
        dispatch(swapDepartment('all'))
        break;
    };
  }, [checkDep, dispatch]);

  return (
    <TopBar>
      <NavBar>
        {depArray.map((e: string, i: number) => (
        <ItemBar 
          onClick={(ev: BaseSyntheticEvent) => setCheckDep(ev.target.firstChild.textContent)}
          click={checkDep === e}
          key={i}>{e}</ItemBar>
          ))}
      </NavBar>
    </TopBar>
  )
};
