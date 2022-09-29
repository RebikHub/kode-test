import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../interfaces/interfaces';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addUser } from '../store/sliceDetailsUser';
import { ItemDepartment, ItemDepartmentLoading, ItemImage, ItemImageLoad, ItemInfo, ItemListDiv, ItemName, ItemNameLoading, LineDiv, SortDay } from '../styles/styles';

type Props = {
  item: null | IUser
};

export default function ItemPeople({item}: Props): ReactElement {
  const { loading, sortingDate } = useAppSelector((state) => state.sliceGetUsers);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function choiceUser() {
    dispatch(addUser(item));
    navigate('/details');
  }
  
  if (loading) {
    return (
      <ItemListDiv>
        <ItemImageLoad/>
        <ItemInfo>
          <ItemNameLoading/>
          <ItemDepartmentLoading/>
        </ItemInfo>
      </ItemListDiv> 
    )
  }
  
  return (
    <>
      {item?.yearLine ?
      <LineDiv>
        <div/>
        <p>2022</p>
        <div/>
      </LineDiv> : null}
      <ItemListDiv onClick={choiceUser}>
        <ItemImage>
          <img src={item?.avatarUrl} alt="" />
        </ItemImage>
        <ItemInfo>
          <ItemName>{item?.firstName} {item?.lastName} <span>{item?.userTag}</span></ItemName>
          <ItemDepartment>{item?.department}</ItemDepartment>
        </ItemInfo>
        {sortingDate ? <SortDay>{item?.birthdayShort}</SortDay> : null}
      </ItemListDiv>
    </>
  )
}
