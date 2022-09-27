import React, { ReactElement } from 'react';
import { ItemDepartment, ItemImage, ItemInfo, ItemListDiv, ItemName } from '../styles/styles';

type Props = {
  item: number
};

export default function ItemPeople({item}: Props): ReactElement {
  return (
    <ItemListDiv>
      <ItemImage>
        <img src="" alt="" />
      </ItemImage>
      <ItemInfo>
        <ItemName><span></span></ItemName>
        <ItemDepartment></ItemDepartment>
      </ItemInfo>
    </ItemListDiv>
  )
}
