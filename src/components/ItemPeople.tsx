import React, { ReactElement } from 'react';
import { IUser } from '../interfaces/interfaces';
import { useAppSelector } from '../store/hooks';
import { ItemDepartment, ItemDepartmentLoading, ItemImage, ItemInfo, ItemListDiv, ItemName, ItemNameLoading } from '../styles/styles';

type Props = {
  item: null | IUser
};

export default function ItemPeople({item}: Props): ReactElement {
  const { loading, sortingDate } = useAppSelector((state) => state.sliceGetUsers);
  
  if (loading) {
    return (
      <ItemListDiv>
        <ItemImage/>
        <ItemInfo>
          <ItemNameLoading/>
          <ItemDepartmentLoading/>
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
      {sortingDate ? <div style={{
        alignSelf: 'center',
        marginLeft: 'auto',
        fontFamily: 'Inter-regular',
        fontSize: '15px',
        lineHeight: '20px',
        textAlign: 'right',
        color: '#55555C'
      }}>{item?.birthday}</div> : null}
    </ItemListDiv>
  )
}
