import React, { ReactElement } from 'react';
import { IUser } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import { ItemDepartment, ItemImage, ItemInfo, ItemListDiv, ItemName } from '../styles/styles';

type Props = {
  item: null | IUser
};

export default function ItemPeople({item}: Props): ReactElement {
  const { loading } = useAppSelector((state) => state.sliceGetUsers);
  
  if (loading) {
    return (
      <ItemListDiv>
        <ItemImage/>
        <ItemInfo>
          <ItemName/>
          <ItemDepartment/>
        </ItemInfo>
      </ItemListDiv> 
    )
  }
  
  return (
    <ItemListDiv>
      <ItemImage>
        <img src={item?.avatarUrl} alt="" />
      </ItemImage>
      <ItemInfo>
        <ItemName>{item?.firstName} {item?.lastName} <span>{item?.userTag}</span></ItemName>
        <ItemDepartment>{item?.department}</ItemDepartment>
      </ItemInfo>
    </ItemListDiv>
  )
}
