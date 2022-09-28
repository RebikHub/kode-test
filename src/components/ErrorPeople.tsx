import React, { ReactElement } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getUsersList } from '../store/sliceGetUsers';
import { ErrorPeopleDiv, ErrorPeopleImage, ErrorPeopleText, ErrorPeopleTitle, ErrorPeopleTry } from '../styles/styles'

export default function ErrorPeople(): ReactElement {
  const { department } = useAppSelector((state) => state.sliceChoiceDep);
  const dispatch = useAppDispatch();
  return (
    <ErrorPeopleDiv>
      <ErrorPeopleImage search={null}/>
      <ErrorPeopleTitle>Какой-то сверхразум все сломал</ErrorPeopleTitle>
      <ErrorPeopleText>Постараемся быстро починить</ErrorPeopleText>
      <ErrorPeopleTry onClick={() => dispatch(getUsersList(department))}>Попробовать снова</ErrorPeopleTry>
    </ErrorPeopleDiv>
  )
}
