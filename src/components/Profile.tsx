import React, { ReactElement, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getUser } from '../store/sliceDetailsUser';
import { Details, DetailsBirth, DetailsBody, DetailsHeader, DetailsPhone } from '../styles/styles';
import { calcAge, convertDate, phoneNumber } from '../utils/utils';

export default function Profile(): ReactElement {
  const { user } = useAppSelector((state) => state.sliceDetailsUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (user === null && params.id) {
      dispatch(getUser(params.id));
    };
  }, [dispatch, params.id, user]);

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
