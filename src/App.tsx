import * as React from 'react';
import { ReactElement } from 'react';
import { useAppSelector } from './store/hooks';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ListPeople from './components/ListPeople';
import Profile from './components/Profile';
import SortList from './components/SortList';

export default function App(): ReactElement {
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
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}
