import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`
export const HeaderTitle = styled.h4`
  width: 76px;
  height: 28px;
  margin-top: 16px;
  margin-left: 24px;

  font-family: 'Inter-bold';
  font-style: normal;
  font-size: 24px;
  line-height: 28px;
  color: #050510;
`
export const InputDiv = styled.div`
  display: flex;
  width: 1248px;
  margin: 6px 16px;
  padding: 8px 12px;
  background: #F7F7F8;
  border-radius: 16px;
`
export const Input = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  background-color: transparent;

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
  margin-right: 10px;
  cursor: pointer;
`
export const SortDiv = styled.div`
  width: 21px;
  height: 12px; 
  margin: 6px 4px;
  cursor: pointer;
`