import * as React from 'react';
import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import Head from './components/Head';
import ListPeople from './components/ListPeople';
import Profile from './components/Profile';

export default function App(): ReactElement {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Head/>
          <ListPeople/>
        </>
      }/>
      <Route path='/profile' element={<Profile/>}/>
    </Routes>
  );
}
