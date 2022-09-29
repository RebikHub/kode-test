import * as React from 'react';
import { memo, ReactElement } from 'react';
import { useAppSelector } from './store/hooks';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListPeople from './components/ListPeople';
import Profile from './components/Profile';
import SortList from './components/SortList';

export default memo(function App(): ReactElement {
  const {modal} = useAppSelector((state) => state.sliceModalSort);
  

  return (
    <Routes>
      <Route path='/' element={
        <>
          <Header/>
          <ListPeople/>
          {modal ? <SortList/> : null}
        </>
      }/>
      <Route path='/details/:id' element={<Profile/>}/>
    </Routes>
  );
})
