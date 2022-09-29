import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { Details, DetailsBirth, DetailsBody, DetailsHeader, DetailsPhone } from '../styles/styles';
import { calcAge, convertDate, phoneNumber } from '../utils/utils';

export default function Profile(): ReactElement {
  const { user } = useAppSelector((state) => state.sliceDetailsUser);
  const navigate = useNavigate();

  return (
    <Details>
      <DetailsHeader>
        <span className='DetailsBack' onClick={() => navigate('/')}/>
        <img src={user?.avatarUrl} alt="" className="DetailsImage" />
        <p className="DetailsName">{user?.firstName} {user?.lastName}<span>{user?.userTag}</span></p>
        <p className="DetailsDepartment">{user?.department}</p>
      </DetailsHeader>

      <DetailsBody>
        <DetailsBirth>
          <span/>
          <p>{convertDate(user?.birthday)}</p>
          <p>{calcAge(user?.birthday)}</p>
        </DetailsBirth>
        <DetailsPhone>
          <span/>
          <a href='tel:'>{phoneNumber(user?.phone)}</a>
        </DetailsPhone>
      </DetailsBody>
    </Details>
  )
}
