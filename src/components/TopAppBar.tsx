/* eslint-disable react-hooks/exhaustive-deps */
import React, { BaseSyntheticEvent, ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { swapDepartment } from '../store/sliceChoiceDep';
import { clearStatus, getUsersList } from '../store/sliceGetUsers';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const depArray: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const { department } = useAppSelector((state) => state.sliceChoiceDep);
  const {sorting, sortingDate, searching, searchedList} = useAppSelector((state) => state.sliceGetUsers);
  const [checkDep, setCheckDep] = useState<string>(department.menu);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearStatus());
    switch (checkDep) {
      case 'Все':
        dispatch(swapDepartment({name: 'all', menu: 'Все'}))
        break;
      case 'Designers':
        dispatch(swapDepartment({name: 'design', menu: 'Designers'}))
        break;
      case 'Analysts':
        dispatch(swapDepartment({name: 'analytics', menu: 'Analysts'}))
        break;
      case 'Managers':
        dispatch(swapDepartment({name: 'management', menu: 'Managers'}))
        break;
      case 'iOS':
        dispatch(swapDepartment({name: 'ios', menu: 'iOS'}))
        break;
      case 'Android':
        dispatch(swapDepartment({name: 'android', menu: 'Android'}))
        break;
    };
  }, [checkDep, dispatch]);

  useEffect(() => {
    if (!sorting && !sortingDate && !searching) {
      if (!searchedList) {
        dispatch(getUsersList(department.name));
      };
    };
  }, [department.name])

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
