import React, { ReactElement, useState } from 'react'
import { useAppDispatch } from '../store/hooks'
import { closeSort } from '../store/sliceModalSort';
import { Modal, Sort, SortAlphabet, SortBirthday, SortBody, SortCheck, SortClose, SortHeader, SortText, SortTitle } from '../styles/styles'

type Check = {
  alphabet: boolean,
  birthday: boolean
};

export default function SortList(): ReactElement {
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<Check>({
    alphabet: false,
    birthday: false
  })

  return (
    <Modal>
      <Sort>
        <SortHeader>
          <SortTitle>Сортировка</SortTitle>
          <SortClose onClick={() => dispatch(closeSort())}/>
        </SortHeader>
        <SortBody>
          <SortAlphabet>
            <SortCheck
              check={check.alphabet}
              onClick={() => setCheck({
                alphabet: !check.alphabet,
                birthday: false
                })}/>
            <SortText>По алфавиту</SortText>
          </SortAlphabet>
          <SortBirthday>
          <SortCheck
              check={check.birthday}
              onClick={() => setCheck({
                alphabet: false,
                birthday: !check.birthday
                })}/>
            <SortText>По дню рождения</SortText>
          </SortBirthday>
        </SortBody>
      </Sort>
    </Modal>
  )
}
