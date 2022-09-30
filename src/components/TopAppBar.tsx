import React, { BaseSyntheticEvent, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { swapDepartment } from '../store/sliceChoiceDep';
import { getUsersList } from '../store/sliceGetUsers';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const depArray: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const { department } = useAppSelector((state) => state.sliceChoiceDep);
  const [checkDep, setCheckDep] = useState<string>(department.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    switch (checkDep) {
      case 'Все':
        dispatch(getUsersList('all'));
        dispatch(swapDepartment({name: 'all', menu: 'Все'}))
        break;
      case 'Designers':
        dispatch(getUsersList('design'));
        dispatch(swapDepartment({name: 'design', menu: 'Designers'}))
        break;
      case 'Analysts':
        dispatch(getUsersList('analytics'));
        dispatch(swapDepartment({name: 'analytics', menu: 'Analysts'}))
        break;
      case 'Managers':
        dispatch(getUsersList('management'));
        dispatch(swapDepartment({name: 'management', menu: 'Managers'}))
        break;
      case 'iOS':
        dispatch(getUsersList('ios'));
        dispatch(swapDepartment({name: 'ios', menu: 'iOS'}))
        break;
      case 'Android':
        dispatch(getUsersList('android'));
        dispatch(swapDepartment({name: 'android', menu: 'Android'}))
        break;
      default:
        dispatch(getUsersList('all'));
        dispatch(swapDepartment({name: 'all', menu: 'Все'}))
        break;
    };
  }, [checkDep, dispatch]);

  return (
    <TopBar>
      <NavBar>
        {depArray.map((e: string, i: number) => (
        <ItemBar 
          onClick={(ev: BaseSyntheticEvent) => setCheckDep(ev.target.firstChild.textContent)}
          click={department.menu === e}
          key={i}>{e}</ItemBar>
          ))}
      </NavBar>
    </TopBar>
  );
};
