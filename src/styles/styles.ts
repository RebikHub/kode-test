import styled, { keyframes } from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`
export const HeaderTitle = styled.h4<{net: boolean}>`
  width: 76px;
  height: 28px;
  margin-top: 16px;
  margin-left: 24px;

  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.net ? '#050510' : '#FFFFFF'};
`
export const Notice = styled.div<{load: boolean}>`
  width: 100%;
  height: 108px;
  background-color: ${(props) => props.load ? '#6534FF' : '#F44336'};
  & > p {
    margin-left: 24px;
    margin-top: 20px;
    font-family: 'Inter-medium';
    font-size: 13px;
    line-height: 16px;
    color: #FFFFFF;
  }
`

export const InputDiv = styled.div`
  display: flex;
  width: 97.5%;
  margin: 6px auto;
  background: #F7F7F8;
  border-radius: 16px;
`
export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  background-color: transparent;
  margin: auto 0px;

  &:focus {
    outline: none;
    caret-color: #6534FF;
  }
  &:placeholder {
    font-family: 'Inter-medium';
    font-size: 15px;
    line-height: 20px;
    color: #C3C3C6;
  }

  font-family: 'Inter-regular';
  font-size: 15px;
  line-height: 20px;
  color: #050510;
`
export const SearchDiv = styled.div`
  width: 21px;
  height: 21px;
  margin: 8px 10px 8px 12px;
`
export const SortDiv = styled.div`
  width: 21px;
  height: 12px; 
  margin: 14px;
  cursor: pointer;
`

export const TopBar = styled.div`
  width: 100%;
  height: 2.25rem;
  margin-top: 0.875rem;
  padding-bottom: 2px;
  border-bottom: 0.33px solid #C3C3C6;
`

export const NavBar = styled.ul`
  display: flex;
  width: 100%;
  margin-left: 16px;
`

export const ItemBar = styled.li<{click: boolean}>`
  display: flex;
  font-family: ${(props) => props.click ? 'Inter-semibold' : 'Inter-medium'};
  font-size: 0.9375rem;
  line-height: 1.25rem;
  text-align: center;
  color: ${(props) => props.click ? '#050510' : '#97979B'};
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  border-bottom: ${(props) => props.click ? '2px solid #6534FF' : 'none'};
`

// SortList

export const Modal = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(5, 5, 16, 0.16);
  top: 0;
  left: 0;
  right: 1;
  bottom: 1;
`

export const Sort = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 8px;
  width: 373px;
  height: 192px;
  background: #FFFFFF;
  border-radius: 20px;
  z-index: 1;
`

export const SortHeader = styled.div`
  position: relative;
  height: 48px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 36px;
`

export const SortTitle = styled.h5`
  font-family: 'Inter-semibold';
  font-size: 20px;
  line-height: 24px;
  color: #050510;
`

export const SortClose = styled.span`
  display: flex;
  position: absolute;
  left: 326px;
  width: 24px;
  height: 24px;
  background-color: #F7F7F8;
  border-radius: 12px;
  background-image: url(${require('../image/close-sort.png')});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

export const SortBody = styled.div`
  margin-left: 18px;
`

export const SortAlphabet = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
`

export const SortCheck = styled.span<{check: boolean}>`
  display: flex;
  box-sizing: border-box;
  margin-right: 14px;
  width: 20px;
  height: 20px;
  border: ${(props) => props.check ? '7px' : '3px'} solid #6534FF;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 7px solid #6534FF;
  }
`

export const SortText = styled.p`
  font-family: 'Inter-medium';
  font-size: 16px;
  line-height: 20px;
  color: #050510;
  align-self: center;
`

export const SortBirthday = styled.div`
  display: flex;
  cursor: pointer;
`

// ListPeople

export const ListDiv = styled.div`
  padding-top: 22px;
`

// ItemPeople

const animationLoad = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6
  }
  100% {
    opacity: 0.3;
  }
`

export const ItemListDiv = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-left: 16px;
  cursor: pointer;
`
export const ItemImage = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50px;
  margin-right: 16px;

  & > img {
    width: 100%;
    border-radius: 50%;
  }
`
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ItemName = styled.p`
  font-family: 'Inter-medium';
  font-size: 16px;
  line-height: 20px;
  color: #050510;

 & > span {
  font-family: 'Inter-medium';
  font-size: 14px;
  line-height: 18px;
  color: #97979B;
 }
`

export const ItemDepartment = styled.p`
  margin-top: 6px;
  font-family: 'Inter-regular';
  font-size: 13px;
  line-height: 16px;
  color: #55555C;
`

export const ItemImageLoad = styled.div`
  width: 72px;
  height: 72px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  animation: ${animationLoad} 600ms infinite ease-in-out alternate;
  border-radius: 50px;
  margin-right: 16px;
`

export const ItemNameLoading = styled.p`
  width: 144px;
  height: 16px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  animation: ${animationLoad} 600ms infinite ease-in-out alternate;
  border-radius: 50px;
`
export const ItemDepartmentLoading = styled.p`
  width: 80px;
  height: 12px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  animation: ${animationLoad} 600ms infinite ease-in-out alternate;
  border-radius: 50px;
  margin-top: 6px;
`

export const SortDay = styled.div`
  align-self: center;
  margin-left: auto;
  font-family: 'Inter-regular';
  font-size: 15px;
  line-height: 20px;
  text-align: right;
  color: #55555C;
`

// ErrorPeople

export const ErrorPeopleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
  margin: 133px auto;
  justify-content: space-between;
  align-items: center;
`

export const ErrorPeopleImage = styled.span<{search: boolean | null}>`
  display: flex;
  width: 56px;
  height: 56px;
  background-image: url(${(props) => props.search ? require('../image/search-error.png') : require('../image/error-people.png')})
`

export const ErrorPeopleTitle = styled.p`
  font-family: 'Inter-semibold';
  font-size: 17px;
  line-height: 22px;
  color: #050510;
  margin-top: 12px;
`

export const ErrorPeopleText = styled.p`
  font-family: 'Inter-regular';
  font-size: 16px;
  line-height: 20px;
  color: #97979B;
  margin-top: 12px;
`

export const ErrorPeopleTry = styled.p`
  font-family: 'Inter-semibold';
  font-size: 16px;
  line-height: 20px;
  color: #6534FF;
  cursor: pointer;
  margin-top: 12px;
`

export const LineDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 25px 0;

  & > div {
    width: 43.59%;
    align-self: center;
    height: 0px;
    border-top: 1px solid #C3C3C6;
  }

  & > p {
    width: 160px;
    height: 20px;
    text-align: center;
    font-family: 'Inter-medium';
    font-size: 15px;
    line-height: 20px;
    color: #C3C3C6;
  }
`
// Details

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DetailsHeader = styled.div`
  background-color: #F7F7F8;
  padding-bottom: 32px;

  & > a {
    display: flex;
    width: 11px;
    height: 11px;
    margin: 28px;
    background-image: url(${require('../image/back-arrow.png')});
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
  }

  & > img {
    display: flex;
    width: 104px;
    height: 104px;
    margin: 0 auto;
    border-radius: 50%;
  }

  & > p {
    text-align: center;
    margin-top:24px;
    font-family: 'Inter-bold';
    font-size: 24px;
    line-height: 28px;
    color: #050510;
  }

  & > p > span {
    display: inline;
    vertical-align: middle;
    margin-left: 5px;
    font-family: 'Inter-regular';
    font-size: 17px;
    line-height: 22px;
    color: #97979B;
  }

  & p ~ p {
    margin-top: 12px;
    font-family: 'Inter-regular';
    font-size: 13px;
    line-height: 16px;
    color: #55555C;
  }
`


export const DetailsBody = styled.div`
  margin: 0 16px;
`


export const DetailsBirth = styled.div`
  display: flex;
  border-bottom: 0.5px solid #F7F7F8;
  padding: 26px 0;

  & > span {
    display: flex;
    width: 20px;
    height: 20px;
    margin-right: 14px;
    background-image: url(${require('../image/star.png')});
    background-position: center;
    background-repeat: no-repeat;
  }

  & > p {
    font-family: 'Inter-medium';
    font-size: 16px;
    line-height: 20px;
    color: #050510;
    margin-right: auto;
  }

  & > p ~ p {
    font-family: 'Inter-medium';
    font-size: 16px;
    line-height: 20px;
    color: #97979B;
    margin-right: 0;
  }
`

export const DetailsPhone = styled.div`
  display: flex;
  padding-top: 26px;

  & > a {
    font-family: 'Inter-medium';
    font-size: 16px;
    line-height: 20px;
    color: #050510;
  }

  & > span {
    display: flex;
    width: 22px;
    height: 22px;
    margin-right: 13px;
    background-image: url(${require('../image/phone.png')});
    background-position: center;
    background-repeat: no-repeat;
  }
`
