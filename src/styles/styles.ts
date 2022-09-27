import styled from 'styled-components';

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
export const Offline = styled.div`
  width: 100%;
  height: 108px;
  background-color: #F44336;
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
  cursor: pointer;
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
`

export const SortCheck = styled.span<{check: boolean}>`
  display: flex;
  box-sizing: border-box;
  margin-right: 14px;
  width: 20px;
  height: 20px;
  border: ${(props) => props.check ? '7px' : '3px'} solid #6534FF;
  border-radius: 50%;
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
`

// ListPeople

export const ListDiv = styled.div`
  padding-top: 22px;
`

// ItemPeople

export const ItemListDiv = styled.div`
  display: flex;
  margin-bottom: 24px;
  margin-left: 16px;
`
export const ItemImage = styled.div`
  width: 72px;
  height: 72px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  border-radius: 50px;
  margin-right: 16px;

  & > img {

  }
`
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ItemName = styled.p`
  width: 144px;
  height: 16px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  border-radius: 50px;

 & > span {

 }
`

export const ItemNameTag = styled.span``

export const ItemDepartment = styled.p`
  width: 80px;
  height: 12px;
  margin-top: 6px;
  background: linear-gradient(90deg, #F3F3F6 0%, #FAFAFA 100%);
  border-radius: 50px;
`
// ErrorPeople

export const ErrorPeopleDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 343px;
  height: 150px;
  margin: 133px auto;
  justify-content: space-between;
  align-items: center;
`

export const ErrorPeopleImage = styled.span`
  display: flex;
  width: 56px;
  height: 56px;
  background-image: url(${require('../image/error-people.png')})
`

export const ErrorPeopleTitle = styled.p`
  font-family: 'Inter-semibold';
  font-size: 17px;
  line-height: 22px;
  color: #050510;
`

export const ErrorPeopleText = styled.p`
  font-family: 'Inter-regular';
  font-size: 16px;
  line-height: 20px;
  color: #97979B;
`

export const ErrorPeopleTry = styled.p`
  font-family: 'Inter-semibold';
  font-size: 16px;
  line-height: 20px;
  color: #6534FF;
  cursor: pointer;
`
