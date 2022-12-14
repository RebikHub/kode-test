import React, { BaseSyntheticEvent, ReactElement, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { swapDepartment } from '../store/sliceChoiceDep';
import { clearStatus, updateList } from '../store/sliceUsersList';
import { getUsersList } from '../store/thunk';
import { ItemBar, NavBar, TopBar } from '../styles/styles';

const depArray: string[]  = ['Все', 'Designers', 'Analysts', 'Managers', 'iOS', 'Android'];

export default function TopAppBar(): ReactElement {
  const { department } = useAppSelector((state) => state.sliceChoiceDep);
  const {sorting, searchedList, list} = useAppSelector((state) => state.sliceUsersList);
  const depLists = useAppSelector((state) => state.sliceCacheList.list);
  const dispatch = useAppDispatch();

  function changeDep(ev: BaseSyntheticEvent) {
    dispatch(clearStatus());
    switch (ev.target.firstChild.textContent) {
      case 'Все':
        dispatch(swapDepartment({name: 'all', menu: 'Все'}));
        break;
      case 'Designers':
        dispatch(swapDepartment({name: 'design', menu: 'Designers'}));
        break;
      case 'Analysts':
        dispatch(swapDepartment({name: 'analytics', menu: 'Analysts'}));
        break;
      case 'Managers':
        dispatch(swapDepartment({name: 'management', menu: 'Managers'}));
        break;
      case 'iOS':
        dispatch(swapDepartment({name: 'ios', menu: 'iOS'}));
        break;
      case 'Android':
        dispatch(swapDepartment({name: 'android', menu: 'Android'}));
        break;
    };
  }

  useEffect(() => {
    if (!sorting && !searchedList && !list) {
      if (!depLists[department.name].timer) {
        dispatch(getUsersList(department.name));
      } else {
        dispatch(updateList(depLists[department.name].depList));
      };
    };
  }, [depLists, department.name, dispatch, list, searchedList, sorting])

  return (
    <TopBar>
      <NavBar>
        {depArray.map((e: string, i: number) => (
        <ItemBar 
          onClick={changeDep}
          click={department.menu === e}
          key={i}>{e}</ItemBar>
          ))}
      </NavBar>
    </TopBar>
  );
};
