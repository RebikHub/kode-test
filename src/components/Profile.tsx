import React, { ReactElement } from 'react';
import { useAppSelector } from '../store/hooks';
import { Details, DetailsBirth, DetailsBody, DetailsHeader, DetailsOld, DetailsPhone } from '../styles/styles';

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
          <p className="DetailsBirthText">{user?.birthday}</p>
          <DetailsOld></DetailsOld>
        </DetailsBirth>
        <DetailsPhone>
          <span/>
          <a href='tel:'>{user?.phone}</a>
        </DetailsPhone>
      </DetailsBody>
    </Details>
  )
}
