import React from 'react'
import { ErrorPeopleDiv, ErrorPeopleImage, ErrorPeopleText, ErrorPeopleTitle, ErrorPeopleTry } from '../styles/styles'

export default function ErrorPeople() {
  return (
    <ErrorPeopleDiv>
      <ErrorPeopleImage/>
      <ErrorPeopleTitle>Какой-то сверхразум все сломал</ErrorPeopleTitle>
      <ErrorPeopleText>Постараемся быстро починить</ErrorPeopleText>
      <ErrorPeopleTry>Попробовать снова</ErrorPeopleTry>
    </ErrorPeopleDiv>
  )
}
