import React, { ReactElement, useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { sortAlphabet, sortBirthday } from '../store/sliceGetUsers';
import { closeSort } from '../store/sliceModalSort';
import { Modal, Sort, SortAlphabet, SortBirthday, SortBody, SortCheck, SortClose, SortHeader, SortText, SortTitle } from '../styles/styles';

type Check = {
  alphabet: boolean,
  birthday: boolean
};

export default function SortList(): ReactElement {
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<Check>({
    alphabet: false,
    birthday: false
  });

  function sortToAlphabet() {
    setCheck({
      alphabet: !check.alphabet,
      birthday: false
    });
    dispatch(sortAlphabet());
    dispatch(closeSort());
  };

  function sortToBirthday() {
    setCheck({
      alphabet: false,
      birthday: !check.birthday
    });
    dispatch(sortBirthday());
    dispatch(closeSort());
  };

  return (
    <Modal>
      <Sort>
        <SortHeader>
          <SortTitle>Сортировка</SortTitle>
          <SortClose onClick={() => dispatch(closeSort())}/>
        </SortHeader>
        <SortBody>
          <SortAlphabet onClick={sortToAlphabet}>
            <SortCheck check={check.alphabet}/>
            <SortText>По алфавиту</SortText>
          </SortAlphabet>
          <SortBirthday onClick={sortToBirthday}>
          <SortCheck check={check.birthday}/>
            <SortText>По дню рождения</SortText>
          </SortBirthday>
        </SortBody>
      </Sort>
    </Modal>
  );
};
