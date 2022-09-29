import React, { ReactElement } from 'react';
import { useAppSelector } from '../store/hooks';
import { Details, DetailsBirth, DetailsBody, DetailsHeader, DetailsPhone } from '../styles/styles';
import { phoneNumber } from '../utils/utils';

export default function Profile(): ReactElement {
  const { user } = useAppSelector((state) => state.sliceDetailsUser);

  return (
    <Details>
      <DetailsHeader>
        <span className='DetailsBack'/>
        <img src={user?.avatarUrl} alt="" className="DetailsImage" />
        <p className="DetailsName">{user?.firstName} {user?.lastName}<span>{user?.userTag}</span></p>
        <p className="DetailsDepartment">{user?.department}</p>
      </DetailsHeader>

      <DetailsBody>
        <DetailsBirth>
          <span/>
          <p>{user?.birthday}</p>
          <p>23 year</p>
        </DetailsBirth>
        <DetailsPhone>
          <span/>
          <a href='tel:'>{phoneNumber(user?.phone)}</a>
        </DetailsPhone>
      </DetailsBody>
    </Details>
  )
}
